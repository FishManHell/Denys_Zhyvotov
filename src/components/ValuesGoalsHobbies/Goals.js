import React from 'react';
import {HeadingVGN, SimpleTextVGN, WrapperItemVGN} from "../../styled_components/VGH/VGH_styles";
import {TitleText} from "../../styled_components/Universal_styles";

const Goals = () => {
    return (
        <WrapperItemVGN>
            <TitleText margin_bottom={'50px'}>
                Goals
            </TitleText>
            <SimpleTextVGN>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos enim facilis maxime nihil,
                recusandae suscipit temporibus ullam vitae voluptatibus!
            </SimpleTextVGN>
        </WrapperItemVGN>
    );
};

export default Goals;
