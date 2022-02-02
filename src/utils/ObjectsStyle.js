import {ObjColors} from "./objColors";

export const CircleStyles = {
    path: {
        transform: "rotate(180deg)",
        transformOrigin: "center center",
        strokeLinecap: "butt",
        stroke:  ObjColors.birch,
    },
    trail: {
        strokeWidth: 0
    },
    text: {
        fontSize: '1rem',
        fontWeight: 500,
        animation: "fadein 2s",
        fill: ObjColors.easy_black,
    }
}

export const stylesPortfolio = {width: '120px', height: '120px'};