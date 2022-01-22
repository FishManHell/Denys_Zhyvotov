import React from 'react';
import {Container} from "../../styled_components/Universal_styles";
import {MainBlockWithLinkContact, FooterSection, TextFooter} from "../../styled_components/Footer/FooterStyles";
import {arrayFooterLink} from "../../utils/someArrayObj";
import SocialLink from "./SocialLink";

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <TextFooter>links to social networks</TextFooter>
                <MainBlockWithLinkContact>
                    {arrayFooterLink.map(item => <SocialLink key={item.name} {...item}/>)}
                </MainBlockWithLinkContact>
            </Container>
        </FooterSection>
    );
};

export default Footer;