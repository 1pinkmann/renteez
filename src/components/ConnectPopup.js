import Popup from "./common/Popup";
import metamask from "../images/svg/metamask.svg";
import wc from "../images/svg/wc.svg";
import { useState } from "react";

export default function ConnectPopup({ popupShow, setPopupShow, connectMetamask, connectWalletConnect }) {
    const [wallet, setWallet] = useState("");

    function handleConnect() {
        if (wallet === "metamask") {
            connectMetamask();
            setPopupShow(false);
            setWallet("");
        } else if (wallet === "wc") {
            connectWalletConnect();
            setPopupShow(false);
            setWallet("");
        }
    }

    return (
        <Popup popupShow={popupShow} setPopupShow={setPopupShow} className="popup--connect">
            <div className="popup__row">
                <h1 className="popup__title">Connect Wallet</h1>
                <button
                    className="popup__remove remove"
                    onClick={() => setPopupShow(false)}
                ></button>
            </div>
            <ul className="popup__list">
                <li className="popup__item">
                    <button onClick={() => setWallet("metamask")} className={"popup__item-button" + (wallet === "metamask" ? " active" : "")}>
                        <img src={metamask} alt="metamask" className="popup__item-button-icon" />
                        <span>Metamask</span>
                    </button>
                </li>
                <li className="popup__item">
                    <button onClick={() => setWallet("wc")} className={"popup__item-button" + (wallet === "wc" ? " active" : "")}>
                        <img src={wc} alt="metamask" className="popup__item-button-icon" />
                        <span>WalletConnect</span>
                    </button>
                </li>
            </ul>
            <button className="button popup__button" onClick={handleConnect}>Connect</button>
        </Popup>
    );
}
