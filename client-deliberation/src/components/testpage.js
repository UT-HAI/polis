import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import StatementContainer from "./StatementContainer";
import StatementForm from "./StatementForm";
import { Box, Text } from "theme-ui";
import HexLogo from "./hexLogo";
import OpinionContainer from "./OpinionContainer";

const TestPage = () => {
  return (
    <Box sx={{ maxWidth: "768px", margin: "auto", py: "20px", px: "10px" }}>
      <HexLogo />
      <Title value={"Configuring the HAI Lab Space"} />
      <Subtitle
        value={
          "Pilot testing the Pol.is deliberation platform to see what features we should augment."
        }
      />
      <Text sx={{ fontFamily: "callout", fontStyle: "italic", mb: [2] }}>
        Welcome to a new kind of conversation - vote on other people's statements.
      </Text>
      <Box sx={{ mb: "-40px" }}>
        <StatementContainer
          author="Anonymous"
          numStatementsRemaining={33}
          statement={
            'We could get one of those digital frames that can rotate through "posters" of our active projects (visual summaries) and somehow hang it'
          }
        />
        <Box
          sx={{
            border: "solid 1px #d3d3d3",
            borderRadius: "5px",
            bg: "white",
            marginBottom: "10px",
            minHeight: "30px",
            margin: "0 auto",
            width: "99%",
            position: "relative",
            top: "-26px",
            zIndex: "-1",
          }}
        />
        <Box
          sx={{
            border: "solid 1px #d3d3d3",
            borderRadius: "5px",
            bg: "white",
            marginBottom: "10px",
            minHeight: "30px",
            margin: "0 auto",
            width: "98%",
            position: "relative",
            top: "-52px",
            zIndex: "-2",
          }}
        />
      </Box>
      <Text sx={{ fontFamily: "callout", fontStyle: "italic", mb: [3] }}>
        Are your perspectives or experiences missing from the conversation? If so, add them in the
        box below.
      </Text>
      <Text sx={{ fontFamily: "callout", fontStyle: "italic" }}>What makes a good statement?</Text>
      <Text sx={{ fontFamily: "callout", fontStyle: "italic" }}>
        <ul>
          <li>Stand alone idea</li>
          <li>Raise new perspectives, experiences or issues</li>
          <li>Clear & concise (limited to 140 characters)</li>
        </ul>
      </Text>
      <Text sx={{ fontFamily: "callout", fontStyle: "italic", mb: [3] }}>
        Please remember, statements are displayed randomly and you are not replying directly to
        other participants' statements.
      </Text>
      <StatementForm />
      <OpinionContainer />
    </Box>
  );
};

export default TestPage;
