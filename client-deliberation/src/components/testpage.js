import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import StatementContainer from './StatementContainer'
import { Box, Text } from 'theme-ui'

class TestPage extends React.Component {
    render() {
        return (
            <Box sx={{ }}>
                <Title value={"Configuring the HAI Lab Space"}/>
                <Subtitle value={"Pilot testing the Pol.is deliberation platform to see what features we should augment."}/>
                <Text sx={{ mb: [2] }}>Welcome to a new kind of conversation - vote on other people's statements.</Text>
                <StatementContainer author="Anonymous" statement={'We could get one of those digital frames that can rotate through "posters" of our active projects (visual summaries) and somehow hang it'}/>
                <Text sx={{ mb: [3] }}>Are your perspectives or experiences missing from the conversation? If so, add them in the box below.</Text>
                <Text>What makes a good statement?</Text>
                <ul>
                    <li>
                        Stand alone idea
                    </li>
                    <li>
                        Raise new perspectives, experiences or issues
                    </li>
                    <li>
                        Clear & concise (limited to 140 characters)
                    </li>
                </ul>
                <Text>Please remember, statements are displayed randomly and you are not replying directly to other participants' statements.</Text>
            </Box>
        )
    }
}

export default TestPage