import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Text } from "theme-ui";
import AgreeButton from "./AgreeButton";
import DisagreeButton from "./DisagreeButton";
import PassButton from "./PassButton";
import anon_profile from "./anon_profile";

const StatementContainer = ({ author, authorAvatar, numStatementsRemaining, statement }) => {
  return (
    <Box sx={{ border: "solid 1px #d3d3d3", borderRadius: "5px", bg: "white" }}>
      <Box sx={{ margin: "10px" }}>
        <Flex
          sx={{
            columnGap: "10px",
          }}
        >
          <Box sx={{ flex: "0 0 auto" }}>
            <img
              style={{ border: "solid 1px #d3d3d3", borderRadius: "2px" }}
              width="35"
              height="35"
              src={authorAvatar || anon_profile}
            />
          </Box>
          <Flex sx={{ flexDirection: "column" }}>
            <Flex sx={{ justifyContent: "space-between" }}>
              <Text
                sx={{
                  fontWeight: "300",
                }}
              >
                {author} wrote:
              </Text>
              <Text sx={{ fontFamily: "Georgia", fontStyle: "italic", fontSize: [0] }}>
                {numStatementsRemaining} remaining
              </Text>
            </Flex>
            <Box sx={{ maxWidth: "85%" }}>
              <Text
                sx={{
                  fontSize: [3, null, 3],
                  lineHeight: "body",
                  mb: [3, null, 3],
                }}
              >
                {statement}
              </Text>
            </Box>
          </Flex>
        </Flex>

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
};

StatementContainer.propTypes = {
  author: PropTypes.string,
  numStatementsRemaining: PropTypes.number,
  statement: PropTypes.string,
};

export default StatementContainer;
