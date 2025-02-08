/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import "./App.css";


// Define the styles for the button
const buttonStyles = css`
  padding: 10px 20px;
  border: 1px solid blue;
  border-radius: 5px;
`;

// Define the primary button styles
const primaryButtonStyles = css`
  ${buttonStyles};
  background-color: blue;
  color: white;
`;

// Define the secondary button styles
const secondaryButtonStyles = css`
  ${buttonStyles};
  background-color: white;
  color: blue;
`;

const App = () => {
  return (
    <div>
      <button css={primaryButtonStyles}>Primary Button</button>

      <button css={secondaryButtonStyles}>Secondary Button</button>
    </div>
  );
};

export default App;
