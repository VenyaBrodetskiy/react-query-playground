import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './HooksPlayground.css'

interface CountState {
  count: number,
  updateTime: Date
}

function HooksPlayground() {
  const [countState, setCountState] = useState<CountState>({ count: 0, updateTime: new Date() })

  useEffect(() => {
    console.log(`Count updated to ${countState.count} at ${countState.updateTime.toLocaleTimeString()}`)
  }, [countState])
  return (
    <>
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
        <button onClick={() => setCountState((countState) => ({ count: countState.count + 1, updateTime: new Date() }))}>
          Working count is {countState.count}
        </button>
        <button onClick={() => setCountState((countState) => {
          console.log('Previous state:', countState);
          countState.count++;
          countState.updateTime = new Date();
          return countState;
        })}>
          Not working count is {countState.count}
        </button>
        <p>
          Edit <code>src/pages/HooksPlayground.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default HooksPlayground

