import React from 'react'
import Select from '../../common/Select/Select';
import SwapIcon from '../../../Icons/SwapIcon';
import TokenSelect from './../../common/TokenSelect';

export default function FirstStep({ bridge, setBridge }) {

    function swapChains() {
        const tokenOut = bridge.to;
        const tokenIn = bridge.from;

        setBridge({ ...bridge, from: tokenOut, to: tokenIn });
    }

    function selectToToken({ index }) {
        setBridge({ ...bridge, to: bridge.to.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function selectFromToken({ index }) {
        setBridge({ ...bridge, from: bridge.from.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    function selectToken({ index }) {
        setBridge({ ...bridge, token: bridge.token.map((item, itemIndex) => ({ ...item, selected: itemIndex === index })) });
    }

    return (
        <>
            <div className="bridge__row">
                <div className="bridge__select-wrapper bridge__select-wrapper--50">
                    <h2 className="label">From</h2>
                    <Select list={bridge.from} setList={selectFromToken} />
                </div>
                <button className="bridge__swap" onClick={swapChains}>
                    <SwapIcon className="bridge__swap-icon" />
                </button>
                <div className="bridge__select-wrapper bridge__select-wrapper--50">
                    <h2 className="label">To</h2>
                    <Select list={bridge.to} setList={selectToToken} />
                </div>
            </div>
            <div className="bridge__select-wrapper bridge__select-wrapper--100">
                <h2 className="label">Select Token</h2>
                <TokenSelect list={bridge.token} setList={selectToken} />
            </div>
        </>
    )
}
