import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PieceDropAnimation from 'lib/animations/piece-drop-animation';
import SimpleButton from 'lib/components/button/simple-button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PieceDropAnimation props={{ sx: { width: '100px', height: '100px' } }} numberOfPieces={10} />
      <SimpleButton />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
