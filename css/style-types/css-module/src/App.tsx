import "./App.css";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.button}>Click me</button> 
  );
};

function App() {
  return <Button />;
}

export default App;
