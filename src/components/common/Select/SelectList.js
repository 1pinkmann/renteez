

export default function SelectList({ list, selectItem, scrollwrapper }) {
    return (
        <ul className="select__list scrollwrapper select__scrollwrapper" ref={scrollwrapper}>
            {list.map(item => {
                return (
                    <li className="select__item" key={item.id}>
                        <button
                            className={"select__item-button" + (item.selected ? " selected" : "")}
                            onClick={() => {
                                selectItem(item.id);
                            }}
                        >
                            {item.icon && <img src={item.icon} className="select__item-icon" alt={item.title} />}
                            {item.rate ?
                                <div className="select__item-column">
                                    <div className="select__item-row">
                                        <span>{item.shortTitle}</span>
                                        <span>{item.rate.token}</span>
                                    </div>
                                    <div className="select__item-row">
                                        <span>{item.title}</span>
                                        <span>{item.rate.usd}</span>
                                    </div>
                                </div> :
                                <span>{item.shortTitle || item.title}</span>
                            }
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}
