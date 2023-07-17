import React from 'react'
import { Button, Text } from 'theme-ui'

class PassButton extends React.Component {
    render() {
        return (
            <Button sx={{backgroundColor: 'transparent'}}>
                <Text sx={{fontWeight: '400', fontSize: [1], color: 'text'}}>Pass/Unsure</Text>
            </Button>
        )
    }
}

export default PassButton