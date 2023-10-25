import { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner';

export const TestBarcodeScanner = ({ device }) => {
    const [result, setResult] = useState('')
    const [scanning, setScanningStatus] = useState(false)

    const btnHandler = () => {
        setScanningStatus(!scanning)
    }

    const { deviceId, kind, label } = device || {};

    let deviceCapabilities
    if (device.getCapabilities) deviceCapabilities = device.getCapabilities()
    const { aspectRatio, facingMode, frameRate, height, width, resizeMode } = deviceCapabilities || {};



    if (kind === 'audioinput') return (<></>)
    if (kind === 'audiooutput') return (<></>)

    return (
        <>
            <h2>Device Name: {label}</h2>
            {scanning ? <BarcodeScanner setResult={setResult} setScanningStatus={setScanningStatus} deviceId={deviceId} /> : ''}
            <button onClick={btnHandler}>toggle scanning</button>
            <span>Last result:</span>
            <span>{result}</span>

            <h3>deviceId:</h3>
            <p>{deviceId}</p>

            <h3>kind:</h3>
            <p>{kind}</p>

            <h3>facingMode:</h3>
            <p>{facingMode}</p>

            <h3>resizeModes</h3>
            {resizeMode ? resizeMode.map((mode, index) => <p key={mode}>{mode}</p>) : ''}

            <h3>aspectRatio</h3>
            <h4>Max:</h4>
            <p>{aspectRatio ? aspectRatio.max : ''}</p>
            <h4>Min:</h4>
            <p>{aspectRatio ? aspectRatio.min : ''}</p>

            <h3>frameRate</h3>
            <h4>Max:</h4>
            <p>{frameRate ? frameRate.max : ''}</p>
            <h4>Min:</h4>
            <p>{frameRate ? frameRate.min : ''}</p>

            <h3>height</h3>
            <h4>Max:</h4>
            <p>{height ? height.max : ''}</p>
            <h4>Min:</h4>
            <p>{height ? height.min : ''}</p>

            <h3>width</h3>
            <h4>Max:</h4>
            <p>{width ? width.max : ''}</p>
            <h4>Min:</h4>
            <p>{width ? width.min : ''}</p>

        </>
    )
}