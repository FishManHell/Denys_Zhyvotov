import React from 'react';
import {
    AdPhEm,
    BlockAbouteMe,
    BlockAdPhEm,
    BlockContact,
    BlockEducation,
    BlockExperience, BlockExperienceInform,
    BlockImage,
    BlockNamePosition,
    BlockSkills, Experience, ExperienceBar,
    FullName,
    IconTextLink, Information,
    ItemLink,
    LeftSection,
    LeftSkills,
    Line,
    MainBlockSkills,
    MiniBlockConnect,
    Photo,
    Position,
    RightSection,
    RightSkills,
    SimpleText, SkillBar,
    TitleBlock,
    TitleBlockSkills,
    TitleIcon, TitleInform,
    TitleRightBlock,
    TtitleText, WrapperForExperience,
    WrapperForSkills,
    WrapperInformation,
    WrapperLearnMore
} from "../../../styled_components/Heading/LearnMore";
import MyPhoto from '../../../images/123.jpg'
import {AddressCard, At, GitHub, LinKedin, PaperPlane, UserCircle, Users} from "../../../utils/Font Awesome/Solid";

const LearnMore = ({open, closeInform}) => {
    // onClick={closeInform}
    return (
        <WrapperLearnMore visibility={open ? 'visible' : 'hidden'}>
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
                            <TtitleText>About</TtitleText>
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
                            <TtitleText>Contact</TtitleText>
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
                            <TtitleText>References</TtitleText>
                        </TitleBlock>
                        <SimpleText>
                            Available upon request.
                        </SimpleText>
                        <Line/>
                    </BlockAbouteMe>
                    <BlockAbouteMe>
                        <TitleBlock>
                            <TitleIcon>{PaperPlane}</TitleIcon>
                            <TtitleText>Interests</TtitleText>
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
                            <TtitleText>Connect</TtitleText>
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
                            <Experience>
                                <ExperienceBar data-percent={'100%'}/>
                                <BlockExperienceInform>
                                    <TitleInform>2016 <br/>General Education</TitleInform>
                                    <Information>Dnipropetrovsk College</Information>
                                </BlockExperienceInform>
                            </Experience>
                            <Experience>
                                <ExperienceBar data-percent={'50%'}/>
                                <BlockExperienceInform>
                                    <TitleInform>2018 <br/>IT School (Hillel)</TitleInform>
                                    <Information>Web developer</Information>
                                </BlockExperienceInform>
                            </Experience>
                            <Experience>
                                <ExperienceBar data-percent={'20%'}/>
                                <BlockExperienceInform>
                                    <TitleInform>2020 <br/>Tel-Ran</TitleInform>
                                    <Information>Web developer</Information>
                                </BlockExperienceInform>
                            </Experience>

                        </WrapperForExperience>

                    </BlockEducation>


                    <BlockExperience>
                        <TitleRightBlock>Work Experience:</TitleRightBlock>
                    </BlockExperience>
                </RightSection>
            </WrapperInformation>
        </WrapperLearnMore>
    );
};

export default LearnMore;