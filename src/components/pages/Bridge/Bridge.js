import { useState } from "react";
import bsc from "../../../images/svg/bsc.svg";
import ethereum from "../../../images/svg/ethereum.svg";
import Swap from "../../../Icons/Swap";
import TokenSelect from './../../common/TokenSelect';
import Select from "../../common/Select";

export default function Bridge() {

    const [bridge, setBridge] = useState({
        from: [
            { title: "Binance Smart Chain", selected: true, icon: bsc, id: 0 },
            { title: "Ethereum Chain Network", selected: false, icon: ethereum, id: 1 }
        ],
        to: [
            { title: "Binance Smart Chain", selected: false, icon: bsc, id: 0 },
            { title: "Ethereum Chain Network", selected: true, icon: ethereum, id: 1 }
        ],
        token: [
            { title: "Ethereum (ETH)", shortTitle: "ETH", selected: true, icon: ethereum, id: 0 },
            { title: "Binance Smart Chain (BSC)", shortTitle: "BSC", selected: false, icon: bsc, id: 1 }
        ]
    });

    function swapChains() {
        const tokenOut = bridge.to;
        const tokenIn = bridge.from;

        setBridge({ ...bridge, from: tokenOut, to: tokenIn });
    }

    function selectToToken({ index }) {
        setBridge({ ...bridge, to: bridge.to.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function selectFromToken({ index }) {
        setBridge({ ...bridge, from: bridge.from.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function selectToken({ index }) {
        setBridge({ ...bridge, token: bridge.token.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    return (
        <>
            <h1 className="title">Token Bridge</h1>
            <div className="bridge">
                <ul className="bridge__steps bridge__container">
                    <li className="bridge__step active">
                        <span className="bridge__step-number">1</span>
                        <span>Network</span>
                    </li>
                    <li className="bridge__step">
                        <span className="bridge__step-number">2</span>
                        <span>Amount</span>
                    </li>
                    <li className="bridge__step">
                        <span className="bridge__step-number">3</span>
                        <span>Preview</span>
                    </li>
                </ul>
                <div className="bridge__wrapper bridge__container">
                    <div className="bridge__row">
                        <div className="bridge__select-wrapper bridge__select-wrapper--50">
                            <h2 className="label">From</h2>
                            <Select list={bridge.from} setList={selectFromToken} />
                        </div>
                        <button className="bridge__swap" onClick={swapChains}>
                            <Swap className="bridge__swap-icon" />
                        </button>
                        <div className="bridge__select-wrapper bridge__select-wrapper--50">
                            <h2 className="label">To</h2>
                            <Select list={bridge.to} setList={selectToToken} />
                        </div>
                    </div>
                    <div className="bridge__select-wrapper bridge__select-wrapper--100">
                        <h2 className="label">Select Token</h2>
                        <TokenSelect list={bridge.token} setList={selectToken} />
                    </div>
                    <button className="button bridge__button">Continue</button>
                </div>
            </div>
        </>
    )
}
