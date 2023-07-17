import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
// import { Button } from 'theme-ui'
import StatementButton from './StatementButton'

class StatementContainer extends React.Component {
    render() {
        return (
            <Box>
                <h3>{this.props.author} wrote:</h3>
                <h3>{this.props.statement}</h3>
                <StatementButton>Agree</StatementButton>
                <StatementButton>Disagree</StatementButton>
                <StatementButton>Pass/Unsure</StatementButton>
            </Box>
        )
    }
}

StatementContainer.propTypes = {
    author: PropTypes.string,
    numStatementsRemaining: PropTypes.number,
    statement: PropTypes.string,
}
  
export default StatementContainer
  