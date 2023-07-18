/** @jsx jsx */

import React, { useState } from "react";
import { Flex, Box, Text, Button, jsx } from "theme-ui";
import anon_profile from "./anon_profile";

const StatementForm = () => {
  const [charCount, setCharCount] = useState(0);

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
            onChange={() => setCharCount(event.target.value.length)}
            maxLength={400}
          />
          <Flex sx={{ alignItems: "center", justifyContent: "end" }}>
            {charCount > 140 ? (
              <Text sx={{ color: "red", mr: [3] }}>{`Statement length limit exceeded by ${
                charCount - 140
              } ${charCount - 140 > 1 ? "characters" : "character"}`}</Text>
            ) : (
              <Text sx={{ color: "gray", mr: [3] }}>{140 - charCount}</Text>
            )}
            <Button sx={{ padding: "8px 28px", my: [1] }} id="submitButton">
              {"Submit"}
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default StatementForm;
