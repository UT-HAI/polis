import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import HexLogo from "./hexLogo";
import { Box } from "theme-ui";

const DoesNotExist = () => {

  return (
    <Box sx={{ maxWidth: "768px", margin: "auto", py: "20px", px: "10px" }}>
      <HexLogo />
      <Title value={"This conversation does not exist."} />
      <Subtitle
        value={
          "We can't seem to find the page your looking for."
        }
      />
    </Box>
  );
};

export default DoesNotExist;
