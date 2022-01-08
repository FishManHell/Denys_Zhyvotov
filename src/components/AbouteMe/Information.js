import React from 'react';
import {
    MiniBlockAboutMe, MiniItem,
    SubtitleText,
    TitleText,
    WrapperInformation
} from "../../styled_components/AbouteMe/Aboute_styles";

const Information = () => {
    return (
        <WrapperInformation>
            <TitleText>About Me</TitleText>
            <SubtitleText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minus qui ut veniam
                voluptatum! Architecto fugit ratione sapiente tempore. Ducimus.
            </SubtitleText>
            <SubtitleText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minus qui ut veniam
            </SubtitleText>
            <MiniBlockAboutMe>
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*подумать что с этим делать потом */}
            </MiniBlockAboutMe>
        </WrapperInformation>
    );
};

export default Information;
