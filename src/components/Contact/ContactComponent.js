import React from 'react';
import {SectionContact} from "../../styled_components/Contact/ContactComponentStyles";
import {Container} from "../../styled_components/Universal_styles";
import InformationContact from "./InformationContact";

const ContactComponent = () => {
    return (
        <SectionContact>
            <Container>
                <InformationContact/>
            </Container>
        </SectionContact>
    );
};

export default ContactComponent;