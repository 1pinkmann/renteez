import React from 'react';
import SelectButton from './SelectButton';
import SelectList from './SelectList';
import useSelect from './../../../hooks/useSelect';

export default function Select({ className, list, setList, callback, CustomArrow, name }) {
    // const [searchText, setSearchText] = useState("");
    const { toggleSelect, selected, scrollvisible, scrollwrapper, opened } = useSelect({ list });

    function selectItem(index) {
        setList({ name, index });
        callback && callback(index);
    }

    return (
        <div className={"select " + (className || "") + (opened ? " opened" : "") + (scrollvisible ? " scroll-visible" : "")}>
            <SelectButton toggleSelect={toggleSelect} selected={selected} CustomArrow={CustomArrow} />
            <div className="select__list-wrapper">
                {/* {listTitle && <h2 className="select__list-title">{listTitle}</h2>}
                {search && <Input value={searchText} onChange={e => setSearchText(e.target.value)} />} */}
                <SelectList list={list} selectItem={selectItem} scrollwrapper={scrollwrapper} />
            </div>
        </div>
    )
}