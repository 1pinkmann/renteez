import { useEffect, useRef, useState } from "react";
import { checkForScrollbar } from "../services/scrollbarService";

export default function useSelect({ list }) {
    const [opened, setOpened] = useState(false);
    let selected = list.find(item => item.selected === true);
    const [scrollvisible, setScrollvisible] = useState(false);
    const scrollwrapper = useRef(null);

    function toggleSelect() {
        setOpened(state => !state);
    }

    useEffect(() => {
        function handleDocumentClick(e) {
            
            if (opened && !e.target.closest('.select')) {
                toggleSelect();
            }
        };

        setScrollvisible(checkForScrollbar(scrollwrapper.current));

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [opened]);

    return {
        opened,
        selected,
        scrollvisible,
        toggleSelect,
        scrollwrapper
    }
}
