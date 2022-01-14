import React from 'react';
import {SectionEducExp, WrapperEducExp} from "../../styled_components/Education/Education_styles";
import {Container} from "../../styled_components/Universal_styles";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const EducExp = () => {
    return (
        <SectionEducExp name={'edu&exp'}>
            <Container>
                <WrapperEducExp>
                    <Education/>
                    <Experience/>
                </WrapperEducExp>
            </Container>
        </SectionEducExp>
    );
};

export default EducExp;
