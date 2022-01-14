import React from 'react';
import {
    MiniBlockAboutMe,
    SubtitleText,
    WrapperInformation
} from "../../styled_components/AbouteMe/Aboute_styles";
import {TitleText} from "../../styled_components/Universal_styles";

const Information = () => {
    return (
        <WrapperInformation>
            <TitleText margin_bottom={'50px'}>About Me</TitleText>
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
