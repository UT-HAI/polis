import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Text } from "theme-ui";
import AgreeButton from "./AgreeButton";
import DisagreeButton from "./DisagreeButton";
import PassButton from "./PassButton";

class StatementContainer extends React.Component {
  render() {
    return (
      <Box sx={{ border: "solid 1px #d3d3d3", borderRadius: "5px", marginBottom: "10px" }}>
        <Box sx={{ margin: "10px" }}>
          <Flex
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Text
              sx={{
                fontWeight: "300",
              }}
            >
              {this.props.author} wrote:
            </Text>
            <Text sx={{ fontFamily: "Georgia", fontStyle: "italic", fontSize: [1] }}>33 remaining</Text>
          </Flex>
          <Text
            sx={{
              fontSize: [3, null, 3],
              lineHeight: "body",
              mb: [3, null, 3],
              maxWidth: "85%",
            }}
          >
            {this.props.statement}
          </Text>
          <Flex
            sx={{
              justifyContent: "space-around",
            }}
          >
            <AgreeButton />
            <DisagreeButton />
            <PassButton />
          </Flex>
        </Box>
      </Box>
    );
  }
}

StatementContainer.propTypes = {
  author: PropTypes.string,
  numStatementsRemaining: PropTypes.number,
  statement: PropTypes.string,
};

export default StatementContainer;
