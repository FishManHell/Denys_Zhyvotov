import React from 'react';
import {LeftSection} from "../../../../styled_components/Heading/LearnMore";
import MyPhotoContent from "./MyPhotoContent";
import {arrayLeftSidebar} from "../../../../utils/someArrayObj";
import Content from "./Content";
import NamePosition from "./NamePosition";

const LeftSidebar = () => {
    return (
        <LeftSection>
            <MyPhotoContent link={"https://i.ibb.co/tDdkS9t/photo.jpg"}/>
            <NamePosition name={'Denys Zhyvotov'} position={'Web developer'}/>
            {arrayLeftSidebar.map(block => <Content key={block.title} {...block}/>)}
        </LeftSection>
    );
};

export default LeftSidebar;