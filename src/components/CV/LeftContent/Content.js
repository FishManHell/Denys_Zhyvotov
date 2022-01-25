import React from 'react';
import {
    BlockAboutMe,
    Line,
    SimpleText,
    TitleBlock,
    TitleIcon,
    TitleText
} from "../../../styled_components/Heading/LearnMore";
import ConnectBlock from "./ConnectBlock";

const Content = ({icon, title, simpleText, check, itemLink}) => {
    return (
        <BlockAboutMe>
            <TitleBlock>
                <TitleIcon>{icon}</TitleIcon>
                <TitleText>{title}</TitleText>
            </TitleBlock>
            {check ?
                itemLink.map(link => <ConnectBlock key={link.nameIcon} {...link}/>)
                :
                <SimpleText>{simpleText}</SimpleText>
            }
            <Line/>
        </BlockAboutMe>
    );
};

export default Content;