import React from 'react';
import Values from "./Values";
import Goals from "./Goals";
import Hobbies from "./Hobbies";
import {SectionVGH, WrapperVGN} from "../../styled_components/VGH/VGH_styles";
import {Container} from "../../styled_components/Universal_styles";

const VGH = () => {
    return (
        <SectionVGH>
            <Container>
                <WrapperVGN>
                    <Values/>
                    <Goals/>
                    <Hobbies/>
                </WrapperVGN>
            </Container>
        </SectionVGH>
    );
};

export default VGH;
