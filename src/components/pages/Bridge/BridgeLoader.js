import eth from "../../../images/svg/ethereum.svg";

export default function BridgeLoader({ bridge }) {
    const from = bridge.from.find(item => item.selected);
    const to = bridge.to.find(item => item.selected);

    return (
        <div className="bridge__loader">
            <div className="bridge__loader-column">
                <h2 className="label bridge__loader-label">From</h2>
                <div className="bridge__loader-row">
                    <img src={from.icon} alt={from.title} className="bridge__loader-icon" />
                    <span className="bridge__loader-token bridge__loader-token--1">{from.code}</span>
                </div>
            </div>
            <div className="bridge__loader-track">
                <img src={eth} className="bridge__loader-toggle" alt="Toggle" />
            </div>
            <div className="bridge__loader-column">
                <h2 className="label bridge__loader-label bridge__loader-label--2">To</h2>
                <div className="bridge__loader-row">
                    <span className="bridge__loader-token bridge__loader-token--2">{to.code}</span>
                    <img src={to.icon} alt={to.title} className="bridge__loader-icon" />
                </div>
            </div>
        </div>
    )
}
