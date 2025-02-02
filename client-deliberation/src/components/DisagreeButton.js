import React from "react";
import { Button, Flex } from "theme-ui";

const DisagreeButton = ({ vote }) => {
  return (
    <Button
      variant="vote"
      onClick={() => {
        var o = {
          vote: 1, //disagree
        };
        return vote(o);
      }}
    >
      <Flex sx={{ alignItems: "center", columnGap: [2] }}>
        <svg
          fill="#e74c3c"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          width="22px"
        >
          <path d="M1440 893q0-161-87-295l-754 753q137 89 297 89 111 0 211.5-43.5t173.5-116.5 116-174.5 43-212.5zm-999 299l755-754q-135-91-300-91-148 0-273 73t-198 199-73 274q0 162 89 299zm1223-299q0 157-61 300t-163.5 246-245 164-298.5 61-298.5-61-245-164-163.5-246-61-300 61-299.5 163.5-245.5 245-164 298.5-61 298.5 61 245 164 163.5 245.5 61 299.5z" />
        </svg>
        Disagree
      </Flex>
    </Button>
  );
};

export default DisagreeButton;
