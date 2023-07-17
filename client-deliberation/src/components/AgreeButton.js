import React from "react";
import { Button, Flex, Text } from "theme-ui";

class AgreeButton extends React.Component {
  render() {
    return (
      <Button sx={{ backgroundColor: "transparent" }}>
        <Flex sx={{ alignItems: "center", columnGap: [2] }}>
          <svg
            fill="#2ecc71"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            width="22px"
          >
            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
          </svg>
          <Text sx={{ fontWeight: "400", fontSize: [1], color: "text" }}>Agree</Text>
        </Flex>
      </Button>
    );
  }
}

export default AgreeButton;
