/** @jsx jsx */

import React from "react";
import { Flex, Box, Text, Button, jsx } from "theme-ui";
import { Link } from "react-router-dom";

class StatementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterCount: 0,
      inputValue: "",
    };
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    const characterCount = inputValue.length;
    const remainingCharacters = 140 - characterCount;
    const hasExceededLimit = characterCount > 140;
    const exceededBy = characterCount - 140;
    this.setState({ inputValue, characterCount, remainingCharacters, hasExceededLimit, exceededBy });
  };

  render() {
    const { inputValue, characterCount, remainingCharacters, hasExceededLimit, exceededBy } = this.state;

    return (
      <Box>
        <form sx={{ mb: [4] }}>
          <Box sx={{ mt: [2] }}>
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
            />
          </Box>
          <Flex sx={{ alignItems: "center", justifyContent: "end" }}>
            {hasExceededLimit ? (
              <Text sx={{ color: "red", mr: [3] }}>{`Statement length limit exceeded by ${exceededBy} ${exceededBy > 1 ? "characters" : "character"}`}</Text>
            ) : (
              <Text sx={{ color: "gray", mr: [3] }}>
                {remainingCharacters} characters remaining
              </Text>
            )}
            <Button sx={{ padding: "8px 28px", my: [1] }} id="submitButton">
              {"Submit"}
            </Button>
          </Flex>
        </form>
      </Box>
      // <Button>Submit</Button>
    );
  }
}

// StatementContainer.propTypes = {
//     // value: PropTypes.string,
// }

export default StatementForm;
