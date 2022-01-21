import {useEffect, useState} from "react";
import {stylesPortfolio} from "../ObjectsStyle";

export default function (percent) {
    const [check, setCheck] = useState(true)
    const [width, setWidth] = useState(0);
    const [percentNew, setPercent] = useState(0);

    const countingPercent = percent => {
        let id = setInterval(frame, 50)
        let width = 0

        function frame() {
            if (width >= percent) {
                clearInterval(id)
            } else {
                width++
                setPercent(width)
            }
        }
        setWidth((stylesPortfolio.width * percent) / 100)
        return width
    }

    useEffect(() => {
        if (check) {
            countingPercent(percent)
        }
        return () => {
            setCheck(false)
        }
    }, [check])

    return {
        width,
        percentNew
    }
};