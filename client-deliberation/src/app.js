// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
/** @jsx jsx */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { populateUserStore } from './actions'

import _ from 'lodash'

import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Flex, Box, jsx } from 'theme-ui'

/* landers */
import Home from './components/landers/home'
import TOS from './components/landers/tos'
import Privacy from './components/landers/privacy'
import PasswordReset from './components/landers/password-reset'
import PasswordResetInit from './components/landers/password-reset-init'
import PasswordResetInitDone from './components/landers/password-reset-init-done'
import SignIn from './components/landers/signin'
import SignOut from './components/landers/signout'
import CreateUser from './components/landers/createuser'

// /conversation-admin
import ConversationAdminContainer from './components/conversation-admin/index'

import Conversations from './components/conversations-and-account/conversations'
import Account from './components/conversations-and-account/account'
import Integrate from './components/conversations-and-account/integrate'

import InteriorHeader from './components/interior-header'
import TestPage from './components/testpage'
import DoesNotExist from './components/DoesNotExist'
import PolisNet from './util/net'
import Loading from './components/Loading'

const PrivateRoute = ({ component: Component, isLoading, authed, ...rest }) => {
  if (isLoading) {
    return null
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

const RouteOrRedirect = async (props) => {
  const isMatching = await isMatch(props.computedMatch.params.conversation_id);
  return (
    <div>
      {isMatching ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <Redirect to="/404"/>
      )}
    </div>
  )
}


const RouteOrRedirect2 = (props) => {
  const [isConversationExists, setIsConversationExists] = useState(null);

  useEffect(() => {
    isMatch(props.computedMatch.params.conversation_id)
      .then((exists) => setIsConversationExists(exists))
      .catch((error) => setIsConversationExists(false));
  }, [props.computedMatch.params.conversation_id]);

  if (isConversationExists === null) {
    return <Loading />
  }

  return (
    <div>
      {isConversationExists ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <Redirect to="/404" />
      )}
    </div>
  );
};

const RouteOrNotFound = (props) => {
  alert(`/:${props.match.params.conversation_id}`)
  return (
    <div>
      {isMatch(props.match.params.conversation_id) ? (
        // <Route path={`/:${props.match.params.conversation_id}`} component={TestPage} />
        // <Route path={`/:conversation_id`} component={TestPage} />
        <Redirect to="/:conversation_id" />
      ) : (
        // <>{handleRedirect(props)}</>
        <Redirect to="/404"/>
      )}
    </div>
  )
}

// const handleRedirect = (props) => {
//   return <Redirect to="/404" />
// }

const isMatch = (conv_id) => {
  return new Promise((resolve, reject) => {
    PolisNet.polisGet("/api/v3/participationInit", {
      conversation_id: conv_id,
      pid: "mypid",
      lang: "acceptLang",
    }).then((res) => {
      resolve(true);
    }).fail((err) => {
      resolve(false);
    });
  });
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  authed: PropTypes.bool
}

@connect((state) => {
  return state.user
})
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false
      // sidebarDocked: true,
    }
  }

  loadUserData() {
    this.props.dispatch(populateUserStore())
  }

  componentWillMount() {
    this.loadUserData()
    const mql = window.matchMedia(`(min-width: 800px)`)
    mql.addListener(this.mediaQueryChanged.bind(this))
    this.setState({ mql: mql, docked: mql.matches })
  }

  isAuthed() {
    let authed = false

    if (!_.isUndefined(this.props.isLoggedIn) && this.props.isLoggedIn) {
      authed = true
    }

    if (
      (this.props.error && this.props.status === 401) ||
      this.props.status === 403
    ) {
      authed = false
    }

    return authed
  }

  isLoading() {
    const { isLoggedIn } = this.props

    return _.isUndefined(
      isLoggedIn
    ) /* if isLoggedIn is undefined, the app is loading */
  }

  componentDidMount() {
    this.mediaQueryChanged()
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged.bind(this))
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches })
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  handleMenuButtonClick() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() {
    const { location } = this.props
    return (
      <>
        <Switch>
          <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/signin"
            render={() => <SignIn {...this.props} authed={this.isAuthed()} />}
          />
          <Route
            exact
            path="/signin/*"
            render={() => <SignIn {...this.props} authed={this.isAuthed()} />}
          />
          <Route
            exact
            path="/signin/**/*"
            render={() => <SignIn {...this.props} authed={this.isAuthed()} />}
          />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/testpage" component={TestPage} />
          <Route exact path="/signout/*" component={SignOut} />
          <Route exact path="/signout/**/*" component={SignOut} />
          <Route exact path="/createuser" component={CreateUser} />
          <Route exact path="/createuser/*" component={CreateUser} />
          <Route exact path="/createuser/**/*" component={CreateUser} />

          <Route exact path="/pwreset" component={PasswordReset} />
          <Route path="/pwreset/*" component={PasswordReset} />
          <Route exact path="/pwresetinit" component={PasswordResetInit} />
          <Route
            exact
            path="/pwresetinit/done"
            component={PasswordResetInitDone}
          />
          <Route exact path="/tos" component={TOS} />
          <Route exact path="/privacy" component={Privacy} />

          <Route exact path="/404" component={DoesNotExist} />

          {/* <Route path="/:conversation_id" component={TestPage}/> */}
          <RouteOrRedirect2 path="/c/:conversation_id" component={TestPage}/>
          {/* <Route path="/:conversation_id" component={RouteOrNotFound} /> */}
          {/* <Route path="/:conversation_id" component={TestPage}/> */}

          <InteriorHeader>
            <Route
              render={(routeProps) => {
                if (routeProps.location.pathname.split('/')[1] === 'm') {
                  return null
                }
                return (
                  <Flex>
                    <Box sx={{ mr: [5], p: [4], flex: '0 0 auto' }}>
                      <Box sx={{ mb: [3] }}>
                        <Link sx={{ variant: 'links.nav' }} to={`/`}>
                          Conversations
                        </Link>
                      </Box>
                      <Box sx={{ mb: [3] }}>
                        <Link sx={{ variant: 'links.nav' }} to={`/integrate`}>
                          Integrate
                        </Link>
                      </Box>
                      <Box sx={{ mb: [3] }}>
                        <Link sx={{ variant: 'links.nav' }} to={`/account`}>
                          Account
                        </Link>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        p: [4],
                        flex: '0 0 auto',
                        maxWidth: '35em',
                        mx: [4]
                      }}>
                      <PrivateRoute
                        isLoading={this.isLoading()}
                        authed={this.isAuthed()}
                        exact
                        path="/"
                        component={Conversations}
                      />
                      <PrivateRoute
                        isLoading={this.isLoading()}
                        authed={this.isAuthed()}
                        exact
                        path="/conversations"
                        component={Conversations}
                      />
                      <PrivateRoute
                        isLoading={this.isLoading()}
                        authed={this.isAuthed()}
                        exact
                        path="/account"
                        component={Account}
                      />
                      <PrivateRoute
                        isLoading={this.isLoading()}
                        authed={this.isAuthed()}
                        exact
                        path="/integrate"
                        component={Integrate}
                      />
                    </Box>
                  </Flex>
                )
              }}
            />

            <PrivateRoute
              isLoading={this.isLoading()}
              path="/m/:conversation_id"
              authed={this.isAuthed()}
              component={ConversationAdminContainer}
            />
          </InteriorHeader>
        </Switch>
      </>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
    email: PropTypes.string,
    created: PropTypes.number,
    hname: PropTypes.string
  })
}

export default App
