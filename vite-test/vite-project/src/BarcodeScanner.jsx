import { useZxing } from 'react-zxing';

export const BarcodeScanner = ({ setResult }) => {
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        }
    });

    return (<video ref={ref} width="280px" margin="auto" />)
}