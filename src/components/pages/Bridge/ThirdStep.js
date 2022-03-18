import BridgeLoader from "./BridgeLoader";

export default function ThirdStep({ bridge }) {
    const from = bridge.from.find(item => item.selected);
    const to = bridge.to.find(item => item.selected);
    const token = bridge.token.find(item => item.selected);

    return (
        <>
            <BridgeLoader bridge={bridge} />
            <p className="bridge__info">
                You’re about to move this <strong>{bridge.amount}</strong> <strong>{token.shortTitle}</strong> from the <strong>{from.title}</strong> to the <strong>{to.title}</strong>. This will cost <strong>~$2.54 (0,00045 ETH)</strong>. Would you like to continue?
            </p>
        </>
    )
}
