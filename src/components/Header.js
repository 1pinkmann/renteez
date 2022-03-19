import logo from "../images/svg/logo.svg";
import { Link } from 'react-router-dom';
import HeaderDropdown from "./HeaderDropdown";
import truncate from './../services/truncate';
import metamaskIcon from '../images/svg/metamask.svg';
import Arrow2 from './../Icons/Arrow2';
import useSmallScreen from './../hooks/useSmallScreen';

export default function Header({ menuVisible, setMenuVisible, setPopupShow, wallet, setWallet }) {
    const smallScreen = useSmallScreen(768);

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
                    <button className="header__button button button--header" onClick={() => setPopupShow(true)} style={{ display: wallet ? "none" : null }}>Connect to a wallet</button>
                    <div className="header__account" style={{ display: wallet ? null : "none" }}>
                    <button className="button button--header button--account header__account-button">
                        <span className="header__account-button-icon-wrapper">
                            <img src={metamaskIcon} className="header__account-button-icon" alt="metamask" />
                        </span>
                        <span>{truncate("0x5Ad38C57fba63189641aB5E024646684fAdBee75", smallScreen ? 20 : 25)}</span>
                        <Arrow2 className="header__account-button-arrow" />
                    </button>
                    <HeaderDropdown setWallet={setWallet} />
                </div>
                </div>
            </div>
            <button className={"header__mobile-button" + (menuVisible ? " active" : "")} onClick={() => setMenuVisible(!menuVisible)}>
                <span className="header__mobile-button-wrapper"></span>
            </button>
        </header>
    );
}
