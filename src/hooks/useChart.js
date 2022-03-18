import { useState } from "react";

export default function useChart() {
    const [chart, setChart] = useState([
        { title: "Presale", value: 10, color: "#E1A155", id: 1, active: false },
        { title: "Liquidity", value: 30, color: "#A1DCAB", id: 3, active: false },
        { title: "Unlocked", value: 23, color: "#F00375", id: 0, active: false },
        { title: "Burnt", value: 37, color: "#0993EC", id: 2, active: false },
    ]);

    function handleChartArray(segmentIndex) {
        setChart(state => state.map((item, index) => ({ ...item, active: index === segmentIndex })));
    }

    return {
        chart, handleChartArray
    }
}