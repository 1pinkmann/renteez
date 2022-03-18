import logo from "../images/svg/logo.svg";
import { Link } from 'react-router-dom';

export default function Header({ menuVisible, setMenuVisible }) {
    
    return (
        <header className={"header container" + (menuVisible ? " opened" : "")}>
            <a href="/" className="header__logo">
                <img src={logo} alt="logo" className="header__logo-image" />
            </a>
            <div className="header__wrapper">
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <Link to="/" className="header__menu-link">Home</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/swap" className="header__menu-link">Swap</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/bridge" className="header__menu-link">Bridge</Link>
                    </li>
                </ul>
                <div className="header__wallet">
                    <span className="header__wallet-network">BSC</span>
                    <button className="header__button button button--header">Connect to a wallet</button>
                </div>
            </div>
            <button className={"header__mobile-button" + (menuVisible ? " active" : "")} onClick={() => setMenuVisible(!menuVisible)}>
                <span className="header__mobile-button-wrapper"></span>
            </button>
        </header>
    );
}
