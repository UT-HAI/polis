import React from 'react'
import { Box, Heading } from 'theme-ui'

class Subtitle extends React.Component {
    render() {
        return (
            <Heading
            as="h2"
            sx={{
              fontSize: [3, null, 3],
              fontWeight: 400,
              lineHeight: 'body',
              mb: [3, null, 4]
            }}>
            {this.props.value}
          </Heading>
        )
    }
}

export default Subtitle