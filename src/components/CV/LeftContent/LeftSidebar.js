import React from 'react';
import {
    AdPhEm,
    BlockAboutMe, BlockAdPhEm, BlockContact,
    BlockNamePosition,
    FullName, IconTextLink, ItemLink,
    LeftSection, Line, MiniBlockConnect,
    Position, SimpleText, TitleBlock, TitleIcon, TitleText
} from "../../../styled_components/Heading/LearnMore";

import {AddressCard, At, GitHub, Linkedin, PaperPlane, UserCircle, Users} from "../../../utils/Font Awesome/Solid";
import MyPhotoContent from "./MyPhotoContent";

const LeftSidebar = () => {
    return (
        <LeftSection>
           <MyPhotoContent/>
            <BlockNamePosition>
                <FullName>Denys Zhyvotov</FullName>
                <Position>Web developer</Position>
                <Line/>
            </BlockNamePosition>
            <BlockAboutMe>
                <TitleBlock>
                    <TitleIcon>{UserCircle}</TitleIcon>
                    <TitleText>About</TitleText>
                </TitleBlock>
                <SimpleText>
                    Hi everyone! I'm 25 years old.
                    I'm from Ukraine.
                    Now I live in Israel.
                    I have a good experience in front-end developing
                </SimpleText>
                <Line/>
            </BlockAboutMe>
            <BlockContact>
                <TitleBlock>
                    <TitleIcon>{AddressCard}</TitleIcon>
                    <TitleText>Contact</TitleText>
                </TitleBlock>
                <BlockAdPhEm>
                    <AdPhEm>Address: Tel-Aviv-Yafo</AdPhEm>
                    <AdPhEm>Phone: (053) 220-12-30</AdPhEm>
                    <AdPhEm>Email: denyszhyvotov@gmail.com</AdPhEm>
                </BlockAdPhEm>
                <Line/>
            </BlockContact>
            <BlockAboutMe>
                <TitleBlock>
                    <TitleIcon>{Users}</TitleIcon>
                    <TitleText>References</TitleText>
                </TitleBlock>
                <SimpleText>
                    Available upon request.
                </SimpleText>
                <Line/>
            </BlockAboutMe>
            <BlockAboutMe>
                <TitleBlock>
                    <TitleIcon>{PaperPlane}</TitleIcon>
                    <TitleText>Interests</TitleText>
                </TitleBlock>
                <SimpleText>
                    I'm interested in sport
                    I run, go to the gym, go to the movies and hang out with my friends.
                    I love learning new technologies
                </SimpleText>
                <Line/>
            </BlockAboutMe>
            <BlockAboutMe>
                <TitleBlock>
                    <TitleIcon>{At}</TitleIcon>
                    <TitleText>Connect</TitleText>
                </TitleBlock>
                <MiniBlockConnect>
                    <ItemLink href={'#'}>
                        <IconTextLink>{GitHub}</IconTextLink>
                        <IconTextLink>GitHub</IconTextLink>
                    </ItemLink>
                    <ItemLink href={'#'}>
                        <IconTextLink>{Linkedin}</IconTextLink>
                        <IconTextLink>LinkedIn</IconTextLink>
                    </ItemLink>
                </MiniBlockConnect>
                <Line/>
            </BlockAboutMe>
        </LeftSection>
    );
};

export default LeftSidebar;