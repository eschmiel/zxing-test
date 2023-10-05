import { useState } from 'react'
import './App.css'
import { BarcodeScanner } from './BarcodeScanner'

function App() {
  const [result, setResult] = useState('')
  const [scanning, setScanningStatus] = useState(false)

  const btnHandler = () => {
    setScanningStatus(!scanning)
  }

  return (
    <>
      {scanning ? <BarcodeScanner setResult={setResult} setScanningStatus={setScanningStatus} /> : ''}
      <button onClick={btnHandler}>toggle scanning</button>
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  )
}

export default App
