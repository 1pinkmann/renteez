import Input from './../../common/Input';

export default function SecondStep({ bridge, setBridge }) {

    return (
        <>
            <Input className="bridge__input-wrapper" value={bridge.amount} onChange={(e) => setBridge({ ...bridge, amount: e.target.value })} title="Amount" placeholder="Your amount" />
            <p className="text bridge__text">
                <span>Available:</span>
                &nbsp;
                <strong>123.62 ETH</strong>
            </p>
        </>
    )
}
