import Input from './../../common/Input';
import BridgeLoader from './BridgeLoader';

export default function SecondStep({ bridge, setBridge }) {

    return (
        <>
            <BridgeLoader bridge={bridge} />
            <Input className="bridge__input-wrapper" value={bridge.amount} onChange={(e) => setBridge({ ...bridge, amount: e.target.value })} title="Amount" placeholder="Your amount" />
            <p className="bridge__balance">
                <span>Available:</span>
                &nbsp;
                <strong>123.62 ETH</strong>
            </p>
        </>
    )
}
