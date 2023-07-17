/** @jsx jsx */

import React from "react";
import { Box, Text, Button, jsx } from "theme-ui";
import { Link } from "react-router-dom";

class StatementForm extends React.Component {
  render() {
    return (
      <Box>
        <form sx={{ mb: [4] }}>
          <Box sx={{ my: [2] }}>
            <textarea
              sx={{
                fontFamily: 'body',
                fontSize: [2],
                width: '100%',
                borderRadius: 2,
                padding: [2],
                border: '1px solid',
                borderColor: '#cccccc',
                overflow: 'hidden',
                overflowWrap: 'break-word',
                resize: 'none',
                height: '37px'
                
              }}
              id="createStatement"
              placeholder="Share your perspective..."
              type="text"
            />
          </Box>
          <Button sx={{ my: [2] }} id="submitButton">
            {"Submit"}
          </Button>
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
