import React from 'react';
import {Icon, InformationText, MiniBlock} from "../../styled_components/AbouteMe/Aboute_styles";

const ItemInform = ({icon, text}) => {
    return (
        <MiniBlock>
            <Icon>{icon}</Icon>
            <InformationText>{text}</InformationText>
        </MiniBlock>
    );
};

export default ItemInform;