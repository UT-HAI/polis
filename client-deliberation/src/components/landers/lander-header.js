/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, jsx } from 'theme-ui'

import { Link } from 'react-router-dom'
import Logomark from '../framework/logomark'

class Header extends Component {
  render() {
    return (
      <Box>
        <Flex
          sx={{
            margin: `0 auto`,
            width: '100%',
            paddingTop: '2rem',
            paddingBottom: '1.45rem',
            justifyContent: 'space-between'
          }}>
          <Box sx={{ zIndex: 1000 }}>
            <Link sx={{ variant: 'links.nav' }} to="/home">
              <Logomark
                style={{ marginRight: 10, position: 'relative', top: 6 }}
                fill={'#03a9f4'}
              />
              Polis
            </Link>
          </Box>
          <Box>
            {this.props.location?.pathname !== '/signin' ? <Link sx={{ variant: 'links.nav' }} to="/signin">
              Sign in
            </Link> :
              <Link sx={{ variant: 'links.nav' }} to="/createuser">Sign up</Link>}
          </Box>
        </Flex>
      </Box>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object
}

export default Header
