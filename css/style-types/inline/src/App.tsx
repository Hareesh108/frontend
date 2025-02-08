import { useState } from "react";
import "./App.css";

const Button = () => {
  const [hovered, setHovered] = useState(false);

  // in React, the style attribute only accepts regular CSS property-value pairs,
  //  and it doesn't support CSS selectors or pseudo-classes like :hover directly.
  const buttonStyle = {
    backgroundColor: hovered ? "#1d1df0" : "#31315f",
    color: "white",
    padding: "10px 20px",
    border: "1px solid #ff3300",
    borderRadius: "5px",
  };

  // React encourages managing dynamic styles and states using JavaScript,
  //  typically through event handlers like onMouseEnter and onMouseLeave.
  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Click me
    </button>
  );
};

function App() {
  return <Button />;
}

export default App;
