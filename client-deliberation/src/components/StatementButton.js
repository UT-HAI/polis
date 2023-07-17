import React from 'react'
import { Button } from 'theme-ui'

class StatementButton extends React.Component {
    render() {
        return (
            <Button>
                {this.props.children}
            </Button>
        )
    }
}

// StatementContainer.propTypes = {
//     // value: PropTypes.string,
// }

export default StatementButton