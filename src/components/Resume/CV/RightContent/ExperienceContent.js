import React from 'react';
import {BlockExperience} from "../../../../styled_components/Heading/LearnMore";
import {experienceArray} from "../../../../utils/someArrayObj";
import Experience from "./Experience";
import TitleTextComponent from "./TitleTextComponent";

const ExperienceContent = () => {
    return (
        <BlockExperience>
            <TitleTextComponent text={'Work Experience:'}/>
            {experienceArray.map(exp => <Experience key={exp.id} {...exp}/>)}
        </BlockExperience>
    );
};

export default ExperienceContent;