import { useState,useMemo } from 'react'
import './App.css'

function SlowComponent({ num }) {
  // Simulate expensive compute
  const compute = () => {
    console.log('Running expensive compute for', num);
    let s = 0;
    for (let i = 0; i < 100000000; i++) {
      s += i * num;
    }
    return s;
  };

  const result = compute();

  return <div>Computed: {result}</div>;
}

function FastComponent({ num }) {
  // Normally, you'd wrap compute in useMemo
  const value = useMemo(() => {
    console.log('Running useMemo compute for', num);
    let s = 0;
    for (let i = 0; i < 100000000; i++) {
      s += i * num;
    }
    return s;
  }, [num]);

  return <div>Memoized Computed: {value}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Compiler Demo</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render (count: {count})
      </button>
      <br /><br />
      <label>
        Number to compute: {' '}
        <input
          type="number"
          value={num}
          onChange={e => setNum(Number(e.target.value))}
        />
      </label>
      <hr />
      <SlowComponent num={num} />
      <FastComponent num={num} />
    </div>
  );
}

export default App;

