import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import StatementContainer from './StatementContainer'
import StatementForm from './StatementForm'
import { Box, Text } from 'theme-ui'
import Logo from "./hexLogo"
import HexLogo from './hexLogo'

class TestPage extends React.Component {
    render() {
        return (
            <Box sx={{maxWidth: '748px', margin: 'auto'}}>
                <HexLogo/>
                <Title value={"Configuring the HAI Lab Space"}/>
                <Subtitle value={"Pilot testing the Pol.is deliberation platform to see what features we should augment."}/>
                <Text sx={{ fontFamily: 'callout', fontStyle: 'italic', mb: [2] }}>Welcome to a new kind of conversation - vote on other people's statements.</Text>
                <StatementContainer author="Anonymous" statement={'We could get one of those digital frames that can rotate through "posters" of our active projects (visual summaries) and somehow hang it'}/>
                <Text sx={{ fontFamily: 'callout', fontStyle: 'italic', mb: [3] }}>Are your perspectives or experiences missing from the conversation? If so, add them in the box below.</Text>
                <Text sx={{ fontFamily: 'callout', fontStyle: 'italic' }}>What makes a good statement?</Text>
                <Text sx={{ fontFamily: 'callout', fontStyle: 'italic' }}>
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
                </Text>
                <Text sx={{ fontFamily: 'callout', fontStyle: 'italic' }}>Please remember, statements are displayed randomly and you are not replying directly to other participants' statements.</Text>
                <StatementForm/>
            </Box>
        )
    }
}

export default TestPage