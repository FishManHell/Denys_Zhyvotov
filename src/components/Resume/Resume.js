import React from 'react';
import {Container} from "../../styled_components/Universal_styles";
import {
    BlockButtonResume,
    DownloadButton,
    SectionResume,
    WrapperResume
} from "../../styled_components/Resume/Resume_styled";
import resume from '../../utils/CV_Denys_Zh_Front-End Developer.docx'
import LearnMore from "./CV/LearnMore";

const Resume = () => {
    return (
        <SectionResume>
            <Container>
                <WrapperResume>
                    <LearnMore/>
                    <BlockButtonResume>
                        <DownloadButton href={resume}>download resume</DownloadButton>
                    </BlockButtonResume>
                </WrapperResume>
            </Container>
        </SectionResume>
    );
};

export default Resume;
