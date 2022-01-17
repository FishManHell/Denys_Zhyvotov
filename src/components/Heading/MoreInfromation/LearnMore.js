import React from 'react';
import {
    AdPhEm,
    BlockAbouteMe,
    BlockAdPhEm,
    BlockContact,
    BlockEducation,
    BlockExperience,
    BlockImage, BlockInformExperience,
    BlockNamePosition,
    BlockSkills, ElementInform,
    FullName,
    IconTextLink, ItemElementInform,
    ItemLink,
    LeftSection,
    LeftSkills,
    Line,
    MainBlockSkills, MainTextBlock, MainTextInform,
    MiniBlockConnect,
    Photo,
    Position,
    RightSection,
    RightSkills,
    SimpleText, SkillBar,
    TitleBlock,
    TitleBlockSkills,
    TitleIcon,
    TitleRightBlock,
    TitleText, WrapperForExperience,
    WrapperForSkills,
    WrapperInformation,
    WrapperLearnMore
} from "../../../styled_components/Heading/LearnMore";
import MyPhoto from '../../../images/123.jpg'
import {AddressCard, At, GitHub, LinKedin, PaperPlane, UserCircle, Users} from "../../../utils/Font Awesome/Solid";
import ExperienceItem from "./ExperienceItem";
import {experiences} from "../../../utils/ExperienceArray";

const LearnMore = ({open, closeInform}) => {

    const countingPercent = (percent, setPercent, maxWidth, setWidth) => {
        let id = setInterval(frame, 50)
        let width = 0

        function frame() {
            if (width >= percent) {
                clearInterval(id)
            } else {
                width++
                setPercent(width)
            }
        }
        setWidth((maxWidth * percent) / 100)
        return width
    }

    return (
        <WrapperLearnMore visibility={open ? 'visible' : 'hidden'} onClick={closeInform}>
            <WrapperInformation>
                <LeftSection>
                    <BlockImage>
                        <Photo src={MyPhoto}/>
                    </BlockImage>
                    <BlockNamePosition>
                        <FullName>Denys Zhyvotov</FullName>
                        <Position>Web developer</Position>
                        <Line/>
                    </BlockNamePosition>
                    <BlockAbouteMe>
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
                    </BlockAbouteMe>
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
                    <BlockAbouteMe>
                        <TitleBlock>
                            <TitleIcon>{Users}</TitleIcon>
                            <TitleText>References</TitleText>
                        </TitleBlock>
                        <SimpleText>
                            Available upon request.
                        </SimpleText>
                        <Line/>
                    </BlockAbouteMe>
                    <BlockAbouteMe>
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
                    </BlockAbouteMe>
                    <BlockAbouteMe>
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
                    </BlockAbouteMe>
                </LeftSection>
                <RightSection>

                    <MainBlockSkills>
                        <TitleRightBlock>Skills:</TitleRightBlock>
                        <WrapperForSkills>
                            <RightSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>Communication</TitleBlockSkills>
                                    <SkillBar width={'70%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>Organization</TitleBlockSkills>
                                    <SkillBar width={'65%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>Learning</TitleBlockSkills>
                                    <SkillBar width={'65%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>Programming</TitleBlockSkills>
                                    <SkillBar width={'95%'}/>
                                </BlockSkills>
                            </RightSkills>
                            <LeftSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>Planning</TitleBlockSkills>
                                    <SkillBar width={'60%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>HTML/CSS</TitleBlockSkills>
                                    <SkillBar width={'90%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>JavaScript</TitleBlockSkills>
                                    <SkillBar width={'90%'}/>
                                </BlockSkills>
                                <BlockSkills>
                                    <TitleBlockSkills>React/Redux</TitleBlockSkills>
                                    <SkillBar width={'95%'}/>
                                </BlockSkills>
                            </LeftSkills>
                        </WrapperForSkills>
                    </MainBlockSkills>

                    <BlockEducation>
                        <TitleRightBlock>Education</TitleRightBlock>
                        <WrapperForExperience>
                            {experiences.map(exp => <ExperienceItem key={exp.id} {...exp} countingPercent={countingPercent}/>)}
                        </WrapperForExperience>
                    </BlockEducation>


                    <BlockExperience>
                        <TitleRightBlock>Work Experience:</TitleRightBlock>
                        <BlockInformExperience>
                            <MainTextBlock>
                                <MainTextInform>Frontend Developer</MainTextInform>
                                <MainTextInform>2020 - Present</MainTextInform>
                            </MainTextBlock>
                            <ElementInform>
                                <ItemElementInform>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</ItemElementInform>
                                <ItemElementInform>Illo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnam.</ItemElementInform>
                                <ItemElementInform>consequuntur optio odio nam vitae, labore architecto magni et libero officiis culpa.</ItemElementInform>
                            </ElementInform>
                        </BlockInformExperience>
                        <BlockInformExperience>
                            <MainTextBlock>
                                <MainTextInform>Frontend Web Developer</MainTextInform>
                                <MainTextInform>2018 - 2019</MainTextInform>
                            </MainTextBlock>
                            <ElementInform>
                                <ItemElementInform>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</ItemElementInform>
                                <ItemElementInform>Illo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnam.</ItemElementInform>
                                <ItemElementInform>consequuntur optio odio nam vitae, labore architecto magni et libero officiis culpa.</ItemElementInform>
                            </ElementInform>
                        </BlockInformExperience>
                    </BlockExperience>
                </RightSection>
            </WrapperInformation>
        </WrapperLearnMore>
    );
};

export default LearnMore;