import React from "react";
import { Heading } from "theme-ui";

class Title extends React.Component {
  render() {
    return (
      <Heading
        as="h1"
        sx={{
          fontSize: [3, null, 5],
          lineHeight: "body",
          mb: [3, null, 2],
        }}
      >
        {this.props.value}
      </Heading>
    );
  }
}

export default Title;
