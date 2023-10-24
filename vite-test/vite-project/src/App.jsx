import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { BarcodeScanner } from './BarcodeScanner'

function App() {
  const [result, setResult] = useState('')
  const [scanning, setScanningStatus] = useState(false)
  const [deviceCapabilities, setCapabilities] = useState([])

  const btnHandler = () => {
    setScanningStatus(!scanning)
  }

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const capabilities = []
      devices.forEach((device) => {
        if (device.getCapabilities) {
          const cap = device.getCapabilities()
          cap.deviceKind = device.kind
          capabilities.push(cap)
        }
        // const {aspectRatio, frameRate, height, width, resizeMode} = cap
      })

      setCapabilities(capabilities)
    })
  })
  // return (
  //   <>
  //     {scanning ? <BarcodeScanner setResult={setResult} setScanningStatus={setScanningStatus} /> : ''}
  //     <button onClick={btnHandler}>toggle scanning</button>
  //     <p>
  //       <span>Last result:</span>
  //       <span>{result}</span>
  //     </p>
  //   </>
  // )
  return (
    <>
      {scanning ? <BarcodeScanner setResult={setResult} setScanningStatus={setScanningStatus} /> : ''}
      <button onClick={btnHandler}>toggle scanning</button>
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
      {deviceCapabilities.map((device, index) =>
        <div key={index}>
          <h1>device {index}</h1>
          <h2>facingMode?s</h2>
          <p>
            {device.facingMode}
          </p>
          <h2>device kinds</h2>
          <p>
            {device.deviceKind}
          </p>
          <h2>
            aspectRatio:
          </h2>
          <p>
            max: {device.aspectRatio?.max}
          </p>
          <p>
            min: {device.aspectRatio?.min}
          </p>
          <h2>
            frameRate:
          </h2>
          <p>
            max: {device.frameRate?.max}
          </p>
          <p>
            min: {device.frameRate?.min}
          </p>
          <h2>
            height
          </h2>
          <p>
            max: {device.height?.max}
          </p>
          <p>
            min: {device.height?.min}
          </p>
          <h2>
            width
          </h2>
          <p>
            max: {device.width?.max}
          </p>
          <p>
            min: {device.width?.min}
          </p>
          <h2>
            resizeMode
          </h2>
          {device.resizeMode?.map((mode) => <p>{mode}</p>)}
        </div>
      )}
    </>
  )
}

export default App
