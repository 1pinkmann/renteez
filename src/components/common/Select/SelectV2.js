import React from 'react'
import useSelect from '../../../hooks/useSelect';
import Input from '../Input';
import SelectButton from './SelectButton';
import SelectList from './SelectList';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SelectV2({ className, list, setList, callback, name }) {
    const { toggleSelect, selected, scrollvisible, scrollwrapper, opened } = useSelect({ list });
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState(list);

    function selectItem(index) {
        setList({ name, index });
        setSearchList(searchList.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })));
        callback && callback(index);
        toggleSelect();
        setSearchText("");
    }

    useEffect(() => {
        function handleFilter(searchText) {
            let searchList = list.filter(listItem => (searchText === "") || (listItem.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
            setSearchList(searchList);
        }

        handleFilter(searchText);
    }, [searchText, list, setList]);

    return (
        <div className={"select " + (className || "") + (opened ? " opened" : "") + (scrollvisible ? " scroll-visible" : "")}>
            <SelectButton toggleSelect={toggleSelect} selected={selected} />
            <div className="select__list-wrapper">
                <div className="select__list-row">
                    <h2 className="select__list-title">Select a Token</h2>
                    <button className="remove select__remove" onClick={toggleSelect}></button>
                </div>
                <Input className="input-wrapper--search" value={searchText} onChange={e => setSearchText(e.target.value)} type="text" placeholder="Search name or past address" />
                <SelectList list={searchList} selectItem={selectItem} scrollwrapper={scrollwrapper} />
            </div>
        </div>
    )
}
