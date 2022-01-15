import React from 'react';
import ShortGoals from "./ShortGoals";
import LongGoals from "./LongGoals";
import Hobbies from "./Hobbies";
import {SectionVGH, WrapperVGN} from "../../styled_components/VGH/VGH_styles";
import {Container} from "../../styled_components/Universal_styles";

const VGH = () => {
    return (
        <SectionVGH>
            <Container>
                <WrapperVGN>
                    <ShortGoals/>
                    <LongGoals/>
                    <Hobbies/>
                </WrapperVGN>
            </Container>
        </SectionVGH>
    );
};

export default VGH;
