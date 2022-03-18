import Select from "./Select";

export default function TokenSelect({ list, setList }) {

    return (
        <div className="select-wrapper">
            <Select list={list} setList={setList} className="select--v2" />
            <span className="select-wrapper__title">{list.find(item => item.selected).title}</span>
        </div>
    )
}
