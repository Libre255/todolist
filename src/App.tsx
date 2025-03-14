import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navigation/Navbar'
import { makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  }
})

function App() {
  const [count, setCount] = useState(0)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Navbar/> */}
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
