import React from 'react';
import {MainBlockWithMiniBlock, WrapperInformation} from "../../styled_components/AbouteMe/Aboute_styles";
import {arrayInformItem} from "../../utils/someArrayObj";
import ItemInform from "./ItemInform";

const Information = () => {

    return (
        <WrapperInformation>
            <MainBlockWithMiniBlock>
                {arrayInformItem.map(block => <ItemInform key={block.name} {...block}/>)}
            </MainBlockWithMiniBlock>
        </WrapperInformation>
    );
};

export default Information;
