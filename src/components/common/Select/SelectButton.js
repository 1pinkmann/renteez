import Arrow from "../../../Icons/Arrow";

export default function SelectButton({ toggleSelect, selected, CustomArrow }) {
    return (
        <button className="select__button" onClick={toggleSelect}>
            {selected.icon && <img src={selected.icon} className="select__button-icon" alt={selected.title} />}
            <span className="select__button-text">{selected.shortTitle || selected.title}</span>
            {CustomArrow ? <CustomArrow className="select__button-arrow" /> : <Arrow className="select__button-arrow" />}
        </button>
    )
}
