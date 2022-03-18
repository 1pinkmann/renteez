import { useState } from "react";
import bsc from "../../../images/svg/bsc.svg";
import ethereum from "../../../images/svg/ethereum.svg";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from './ThirdStep';

export default function Bridge() {
    const [bridge, setBridge] = useState({
        from: [
            { title: "Binance Smart Chain", code: "BEP20", selected: true, icon: bsc, id: 0 },
            { title: "Ethereum Chain Network", code: "ERC20", selected: false, icon: ethereum, id: 1 }
        ],
        to: [
            { title: "Binance Smart Chain", code: "BEP20", selected: false, icon: bsc, id: 0 },
            { title: "Ethereum Chain Network", code: "ERC20", selected: true, icon: ethereum, id: 1 }
        ],
        token: [
            { title: "Ethereum (ETH)", shortTitle: "ETH", selected: true, icon: ethereum, id: 0 },
            { title: "Binance Smart Chain (BSC)", shortTitle: "BSC", selected: false, icon: bsc, id: 1 }
        ],
        amount: ""
    });

    const [step, setStep] = useState(1);

    function goNext() {
        setStep(state => state + 1);
    }

    function goBack() {
        setStep(state => state - 1);
    }

    function submit() {
        return false;
    }

    return (
        <>
            <h1 className="title">Token Bridge</h1>
            <div className="bridge">
                <ul className="bridge__steps bridge__container">
                    <li className={"bridge__step" + (step === 1 ? " active" : "")}>
                        <span className="bridge__step-number">1</span>
                        <span>Network</span>
                    </li>
                    <li className={"bridge__step" + (step === 2 ? " active" : "")}>
                        <span className="bridge__step-number">2</span>
                        <span>Amount</span>
                    </li>
                    <li className={"bridge__step" + (step === 3 ? " active" : "")}>
                        <span className="bridge__step-number">3</span>
                        <span>Preview</span>
                    </li>
                </ul>
                <div className="bridge__wrapper bridge__container">
                    {step === 1 &&
                        <>
                            <FirstStep bridge={bridge} setBridge={setBridge} />
                            <button className="button bridge__button bridge__button--100" onClick={goNext}>Continue</button>
                        </>}
                    {step === 2 && <SecondStep bridge={bridge} setBridge={setBridge} />}
                    {step === 3 && <ThirdStep bridge={bridge} setBridge={setBridge} />}
                    {step !== 1 &&
                        <div className="bridge__buttons">
                            <button className="button button--transparent bridge__button bridge__button--50" onClick={goBack}>Back</button>
                            <button className="button bridge__button bridge__button--50" onClick={step === 3 ? submit : goNext}>{step === 3 ? "Submit" : "Next"}</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
