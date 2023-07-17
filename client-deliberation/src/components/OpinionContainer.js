import React from "react";
import { Heading, Flex, Text, Box } from "theme-ui";

class OpinionContainer extends React.Component {
  render() {
    return (
      <Box>
        <Heading
          as="h3"
          sx={{
            fontSize: [3, null, 3],
            fontWeight: 400,
            lineHeight: "body",
            mb: [3, null, 2],
          }}
        >
          Opinion Groups
        </Heading>
        <Text sx={{ fontFamily: "callout", fontStyle: "italic", mb: [2] }}>
          People who vote similarly <b>are grouped.</b> Click a group to see which viewpoints they
          share.
        </Text>
        <Text sx={{ fontFamily: "callout", fontStyle: "italic", mb: [2] }}>
          You've probably seen 'recommended products' on Amazon, or 'recommended movies' on Netflix.
          Each of those services uses statistics to group the user with people who buy and watch
          similar things, then show them things that those people bought or watched.
        </Text>
        <Text sx={{ fontFamily: "callout", fontStyle: "italic" }}>
          When a user votes on statements, they are grouped with people who voted like they did! You
          can see those groups below. Each is made up of people who have similar opinions. There are
          fascinating insights to discover in each conversation. Go ahead - click a group to see
          what brought them together and what makes them unique!
        </Text>
      </Box>
    );
  }
}

export default OpinionContainer;
