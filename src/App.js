import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPopup from "./components/ConnectPopup";
import Header from "./components/Header";
import Bridge from "./components/pages/Bridge/Bridge";

function App() {
    const [popupShow, setPopupShow] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
            <main className="main container">
                <Routes>
                    <Route path="/bridge" element={<Bridge />} />
                </Routes>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} />
        </>
    );
}

export default App;
