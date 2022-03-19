import NumberFormat from "react-number-format";

export default function Input({ className, value, onChange, title, placeholder, separator = true, type = "number" }) {

    const id = Math.random();

    return (
        <div className={"input-wrapper " + (className ? className : "")}>
            {title && <label className="label" to={id}>{title}</label>}
            <div className="input-wrapper__row">
                {type === "text" ?
                    <input className="input-wrapper__input" value={value} onChange={onChange} id={id} placeholder={placeholder} /> :
                    <>
                        <NumberFormat className="input-wrapper__input" value={value} onChange={onChange} id={id} thousandSeparator={separator} allowLeadingZeros={false} allowNegative={false} placeholder={placeholder} />
                        <button className="input-wrapper__max">MAX</button>
                    </>
                }
            </div>
        </div>
    );
}
