import { useZxing } from 'react-zxing';

export const BarcodeScanner = ({ setResult, setScanningStatus, deviceId }) => {
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
            setScanningStatus(false)
        },
        deviceId: deviceId
    });

    return (<video ref={ref} width="280px" margin="auto" />)
}