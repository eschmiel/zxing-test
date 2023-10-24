import { useZxing } from 'react-zxing';
import { useState, useEffect } from 'react'

export const BarcodeScanner = ({ setResult, setScanningStatus }) => {
    const [camera, setCamera] = useState()

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            let lowestAspectRatio
            let bestDevice;

            devices.forEach((device) => {
                if (device.getCapabilities) {
                    const { aspectRatio, facingMode } = device.getCapabilities()
                    const properFacing = facingMode === 'environment'
                    const isFirstDevice = !lowestAspectRatio && aspectRatio?.max
                    const aspectRatioIsLessThanLowest = aspectRatio?.max < lowestAspectRatio
                    if (properFacing && (isFirstDevice || aspectRatioIsLessThanLowest)) {
                        lowestAspectRatio = aspectRatio.max
                        bestDevice = device.deviceId
                    }
                }
            })

            setCamera(bestDevice)
        })
    }, [])

    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
            setScanningStatus(false)
        },
        deviceId: camera
    });

    return (<video ref={ref} width="280px" margin="auto" />)
}