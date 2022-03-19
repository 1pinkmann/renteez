import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPopup from "./components/ConnectPopup";
import Header from "./components/Header";
import Bridge from "./components/pages/Bridge/Bridge";
import Swap from "./components/pages/Swap/Swap";
import NotificationProvider from "./contexts/NotificationProvider";

function App() {
    const [wallet, setWallet] = useState("");
    const [popupShow, setPopupShow] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    function connectMetamask() {
        setWallet("metamask");
    }

    function connectWalletConnect() {
        setWallet("wc");
    }

    return (
        <NotificationProvider>
            <Header wallet={wallet} setWallet={setWallet} menuVisible={menuVisible} setMenuVisible={setMenuVisible} setPopupShow={setPopupShow} />
            <main className="main container">
                <Routes>
                    <Route path="/bridge" element={<Bridge />} />
                    <Route path="/swap" element={<Swap />} />
                </Routes>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} wallet={wallet} connectMetamask={connectMetamask} connectWalletConnect={connectWalletConnect} />
        </NotificationProvider>
    );
}

export default App;
