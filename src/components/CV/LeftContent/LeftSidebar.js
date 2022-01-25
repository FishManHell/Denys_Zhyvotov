import React from 'react';
import {
    BlockNamePosition,
    FullName,
    LeftSection, Line,
    Position
} from "../../../styled_components/Heading/LearnMore";
import MyPhotoContent from "./MyPhotoContent";
import {arrayLeftSidebar} from "../../../utils/someArrayObj";
import Content from "./Content";

const LeftSidebar = () => {
    return (
        <LeftSection>
            <MyPhotoContent/>
            <BlockNamePosition>
                <FullName>Denys Zhyvotov</FullName>
                <Position>Web developer</Position>
                <Line/>
            </BlockNamePosition>
            {arrayLeftSidebar.map(block => <Content key={block.title} {...block}/>)}
        </LeftSection>
    );
};

export default LeftSidebar;