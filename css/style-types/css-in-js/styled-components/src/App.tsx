import styled from "styled-components";
import "./App.css";

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props?.primary ? "blue" : "white")};
  color: ${(props) => (props?.primary ? "white" : "blue")};
  padding: 10px 20px;
  border: 1px solid blue;
  border-radius: 5px;
`;

const App = () => {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <p></p>
      <Button>Secondary Button</Button>
    </div>
  );
};

export default App;
