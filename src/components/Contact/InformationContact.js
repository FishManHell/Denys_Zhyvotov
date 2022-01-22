import React from 'react';
import {
    BlockContact,
    BlockStreetInform, MyContact, MyStreetInform,
    TextInform, TitleContact,
    WrapperInformContact
} from "../../styled_components/Contact/ContactComponentStyles";

const InformationContact = () => {
    return (
        <WrapperInformContact>
            <TextInform>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maiores minima nobis placeat reiciendis
                vel vero! Consequatur itaque placeat quibusdam?
            </TextInform>
            <BlockStreetInform>
                <MyStreetInform>122 33rd</MyStreetInform>
                <MyStreetInform>Tel-Aviv Yafo</MyStreetInform>
                <MyStreetInform>22 22 22</MyStreetInform>
            </BlockStreetInform>
            <BlockContact>
                <TitleContact>Email: <MyContact>leonard66693@gmail.com</MyContact></TitleContact>
                <TitleContact>Phone: <MyContact>0532201230</MyContact></TitleContact>
            </BlockContact>
        </WrapperInformContact>
    );
};

export default InformationContact;