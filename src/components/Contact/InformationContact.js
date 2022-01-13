import React from 'react';
import {
    BlockContact,
    BlockStreetInform, MyContact, MyStreetInfrom,
    TextInform, TitleContact,
    TitleText,
    WrapperInformContact
} from "../../styled_components/Contact/ContactComponentStyles";

const InformationContact = () => {
    return (
        <WrapperInformContact>
            <TitleText>Contact Me</TitleText>
            <TextInform>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maiores minima nobis placeat reiciendis
                vel vero! Consequatur itaque placeat quibusdam?
            </TextInform>
            <BlockStreetInform>
                <MyStreetInfrom>122 33rd</MyStreetInfrom>
                <MyStreetInfrom>Tel-Aviv Yafo</MyStreetInfrom>
                <MyStreetInfrom>22 22 22</MyStreetInfrom>
            </BlockStreetInform>
            <BlockContact>
                <TitleContact>Email: <MyContact>leonard66693@gmail.com</MyContact></TitleContact>
                <TitleContact>Phone: <MyContact>0532201230</MyContact></TitleContact>
            </BlockContact>
        </WrapperInformContact>
    );
};

export default InformationContact;