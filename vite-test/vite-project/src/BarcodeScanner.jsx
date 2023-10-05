import { useZxing } from 'react-zxing';

export const BarcodeScanner = ({ setResult, setScanningStatus }) => {
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
            setScanningStatus(false)
        }
    });

    return (<video ref={ref} width="280px" margin="auto" />)
}