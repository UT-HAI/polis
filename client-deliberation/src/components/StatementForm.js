/** @jsx jsx */

import React from "react";
import { Flex, Box, Text, Button, jsx } from "theme-ui";
import anon_profile from "./anon_profile";

class StatementForm extends React.Component {
  //do we need this?
  constructor(props) {
    super(props);
    this.state = {
      characterCount: 0,
      inputValue: "",
    };
  }

  handleChange = (event) => {
    //TODO: get rid of most of these
    const inputValue = event.target.value;
    const characterCount = inputValue.length;
    const remainingCharacters = 140 - characterCount;
    const hasExceededLimit = characterCount > 140;
    const exceededBy = characterCount - 140;
    this.setState({
      inputValue,
      characterCount,
      remainingCharacters,
      hasExceededLimit,
      exceededBy,
    });
  };

  render() {
    const { inputValue, characterCount, remainingCharacters, hasExceededLimit, exceededBy } =
      this.state;

    return (
      <Flex sx={{ columnGap: "10px" }}>
        <img
          style={{ border: "solid 1px #d3d3d3", borderRadius: "2px" }}
          width="35"
          height="35"
          src={anon_profile}
        />
        <Box sx={{ flex: "0 1 100%" }}>
          <form sx={{ mb: [2] }}>
            <textarea
              sx={{
                fontFamily: "body",
                fontSize: [2],
                width: "100%",
                borderRadius: 4,
                padding: [2],
                border: "1px solid",
                borderColor: "#cccccc",
                overflow: "hidden",
                overflowWrap: "break-word",
                resize: "none",
                minHeight: "37px",
              }}
              id="createStatement"
              placeholder="Share your perspective..."
              type="text"
              value={inputValue}
              onChange={this.handleChange}
              maxLength={400}
            />
            <Flex sx={{ alignItems: "center", justifyContent: "end" }}>
              {hasExceededLimit ? (
                <Text
                  sx={{ color: "red", mr: [3] }}
                >{`Statement length limit exceeded by ${exceededBy} ${
                  exceededBy > 1 ? "characters" : "character"
                }`}</Text>
              ) : (
                <Text sx={{ color: "gray", mr: [3] }}>{remainingCharacters}</Text>
              )}
              <Button sx={{ padding: "8px 28px", my: [1] }} id="submitButton">
                {"Submit"}
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    );
  }
}

export default StatementForm;
