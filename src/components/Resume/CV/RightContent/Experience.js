import React from 'react';
import {
    BlockInformExperience,
    ElementInform,
    ItemElementInform,
    MainTextBlock,
    MainTextInform
} from "../../../../styled_components/Heading/LearnMore";

const Experience = ({title, year, information}) => {
    return (
        <BlockInformExperience>
            <MainTextBlock>
                <MainTextInform>{title}</MainTextInform>
                <MainTextInform>{year}</MainTextInform>
            </MainTextBlock>
            <ElementInform>
                {information.map((item, index) => <ItemElementInform key={year + index}>{item}</ItemElementInform>)}
            </ElementInform>
        </BlockInformExperience>
    );
};

export default Experience;