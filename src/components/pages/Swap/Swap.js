import { useState } from "react";
import ethereum from "../../../images/svg/ethereum.svg";
import inch from "../../../images/tokens/1inch.png";
import SwapWrapper from './SwapWrapper';
import SwapIcon from '../../../Icons/SwapIcon';

export default function Swap() {
    const [sendState, setSendState] = useState({
        list: [
            {
                title: "Ethereum (ETH)",
                shortTitle: "ETH",
                rate: {
                    token: "123.62",
                    usd: "599 309,76"
                },
                selected: true,
                icon: ethereum,
                id: 0
            },
            {
                title: "1inch Network (1INCH)",
                shortTitle: "1INCH",
                rate: {
                    token: "3123.62",
                    usd: "4560,48"
                },
                selected: false,
                icon: inch,
                id: 1
            }
        ],
        value: "",
        currentValue: "$4,813.46",
        balance: "123.62"
    });

    const [getState, setGetState] = useState({
        list: [
            {
                title: "Ethereum (ETH)",
                shortTitle: "ETH",
                selected: false,
                rate: {
                    token: "123.62",
                    usd: "599 309,76"
                },
                icon: ethereum,
                id: 0
            },
            {
                title: "1inch Network (1INCH)",
                shortTitle: "1INCH",
                selected: true,
                rate: {
                    token: "3123.62",
                    usd: "4560,48"
                },
                icon: inch,
                id: 1
            }
        ],
        value: "",
        currentValue: "$1.46",
        balance: "33123.62"
    })

    function selectSend({ index }) {
        setSendState({ ...sendState, list: sendState.list.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function selectGet({ index }) {
        setGetState({ ...getState, list: getState.list.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function swapChains() {
        setSendState(getState);
        setGetState(sendState);
    }

    return (
        <div className="swap">
            <h1 className="title">Swap Tokens</h1>
            <div className="swap__row">
                <SwapWrapper
                    title="You send"
                    list={sendState.list}
                    setList={selectSend}
                    currentValue={sendState.currentValue}
                    balance={sendState.balance}
                    value={sendState.value}
                    setValue={(e) => setSendState({ ...sendState, value: e.target.value })}
                />
                <button className="swap__action" onClick={swapChains}>
                    <SwapIcon className="swap__action-icon" />
                </button>
                <SwapWrapper
                    title="You get"
                    list={getState.list}
                    setList={selectGet}
                    currentValue={getState.currentValue}
                    balance={getState.balance}
                    value={getState.value}
                    setValue={(e) => setGetState({ ...getState, value: e.target.value })}
                />
            </div>
            <p className="swap__cost">Trasaction cost: ~$2.54 (0,00045 ETH)</p>
            <button className="button swap__button">Swap Now</button>
        </div>
    )
}
