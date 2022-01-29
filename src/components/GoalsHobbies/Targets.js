import React from 'react';
import ShortGoals from "./ShortGoals";
import LongGoals from "./LongGoals";
import Hobbies from "./Hobbies";
import {SectionVGH, WrapperVGN} from "../../styled_components/GoalsHobbies/GoalsHobbies_styles";
import {Container} from "../../styled_components/Universal_styles";

const Targets = () => {
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

export default Targets;
