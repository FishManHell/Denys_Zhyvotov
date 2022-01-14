import React from 'react';
import {Container, TitleText} from "../../styled_components/Universal_styles";
import {
    BlockButtonResume, DownloadButton,
    InfAboutResume,
    SectionResume,
    WrapperResume
} from "../../styled_components/Resume/Resume_styled";
import resume from '../../utils/CV_Denys_Zh_Front-End Developer.docx'

const Resume = () => {
    return (
        <SectionResume name={'cv'}>
            <Container>
                <WrapperResume>
                    <TitleText margin_bottom={'50px'}>Resume</TitleText>
                    <InfAboutResume>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur eius, eligendi optio
                        possimus sed ullam vitae. Assumenda, beatae perferendis?
                    </InfAboutResume>
                    <BlockButtonResume>
                        <DownloadButton href={resume} download>download resume</DownloadButton>
                    </BlockButtonResume>
                </WrapperResume>
            </Container>
        </SectionResume>
    );
};

export default Resume;
