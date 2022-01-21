import React from 'react';
import {
    Icon, InformationText,
    MainBlockWithMiniBlock, MiniBlock,
    WrapperInformation
} from "../../styled_components/AbouteMe/Aboute_styles";
import {arrayInformItem} from "../../utils/someArrayObj";

const Information = () => {

    return (
        <WrapperInformation>
            <MainBlockWithMiniBlock>
                {arrayInformItem.map(block =>
                    <MiniBlock key={block.name}>
                        <Icon>{block.icon}</Icon>
                        <InformationText>{block.text}</InformationText>
                    </MiniBlock>
                )}
            </MainBlockWithMiniBlock>
        </WrapperInformation>
    );
};

export default Information;
