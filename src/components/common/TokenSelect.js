import SelectV2 from './Select/SelectV2';

export default function TokenSelect({ list, setList }) {

    return (
        <div className="select-wrapper">
            <SelectV2 list={list} setList={setList} className="select--v2" />
            <span className="select-wrapper__title">{list.find(item => item.selected).title}</span>
        </div>
    )
}
