import { useEffect, useState } from 'react'
import './App.css'
import { TestBarcodeScanner } from './BarcodeScannerTest'

function App() {
    const [devices, setDevices] = useState([])
    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            setDevices(devices)
        })
    }, [])

    let count = 0

    return (
        <>
            <h1>Barcode Scanner Camera Tests</h1>
            {devices.map((device) => {
                count++;
                return (<TestBarcodeScanner device={device} key={device.deviceId + count} />)
            })
            }
        </>
    )
}

export default App
