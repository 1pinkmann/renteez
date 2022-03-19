import Input from '../../common/Input';
import TokenSelect from './../../common/TokenSelect';

export default function SwapWrapper({ title, list, setList, currentValue, value, setValue, balance }) {
    return (
        <div className="swap__wrapper">
            <h2 className="label swap__label">{title}</h2>
            <TokenSelect list={list} setList={setList} />
            <p className="text swap__text">
                <span>Current value:</span>
                &nbsp;
                <strong>{currentValue}</strong>
            </p>
            <Input value={value} onChange={setValue} className="swap__input-wrapper" placeholder="Your value" />
            <p className="text swap__text">
                <span>Available:</span>
                &nbsp;
                <strong>{balance} {list.find(item => item.selected).shortTitle}</strong>
            </p>
        </div>
    )
}
