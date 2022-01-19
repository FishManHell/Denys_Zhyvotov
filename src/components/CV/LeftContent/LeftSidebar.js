import React from 'react';
import {
    AdPhEm,
    BlockAboutMe, BlockAdPhEm, BlockContact,
    BlockImage,
    BlockNamePosition,
    FullName, IconTextLink, ItemLink,
    LeftSection, Line, MiniBlockConnect,
    Position, SimpleText, TitleBlock, TitleIcon, TitleText
} from "../../../styled_components/Heading/LearnMore";

import {AddressCard, At, GitHub, LinKedin, PaperPlane, UserCircle, Users} from "../../../utils/Font Awesome/Solid";
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
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Obcaecati in blanditiis mollitia hic.
                </SimpleText>
                <Line/>
            </BlockAboutMe>
            <BlockContact>
                <TitleBlock>
                    <TitleIcon>{AddressCard}</TitleIcon>
                    <TitleText>Contact</TitleText>
                </TitleBlock>
                <BlockAdPhEm>
                    <AdPhEm>Address: Tel-Aviv</AdPhEm>
                    <AdPhEm>Phone: (053) 220-12-30</AdPhEm>
                    <AdPhEm>Email: leonard66693@gmail.com</AdPhEm>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat ad, quisquam.
                    Ad amet itaque architecto quisquam blanditiis dolor ab, quae rem.
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
                        <IconTextLink>{LinKedin}</IconTextLink>
                        <IconTextLink>LinkedIn</IconTextLink>
                    </ItemLink>
                </MiniBlockConnect>
                <Line/>
            </BlockAboutMe>
        </LeftSection>
    );
};

export default LeftSidebar;