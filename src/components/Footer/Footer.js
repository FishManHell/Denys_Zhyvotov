import React from 'react';
import {Container} from "../../styled_components/Universal_styles";
import {
    MainBlockWithLinkContact,
    FooterSection,
    TextFooter,
    BlockLink, Link
} from "../../styled_components/Footer/FooterStyles";
import {arrayFooterLink} from "../../utils/someArrayObj";

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <TextFooter>Copyright 2014 focal - Built With Passion</TextFooter>
                <MainBlockWithLinkContact>
                    {arrayFooterLink.map(item =>
                        <BlockLink key={item.name}>
                            <Link href={item.link} target={'_blank'}>{item.icon}</Link>
                        </BlockLink>
                    )}
                </MainBlockWithLinkContact>
            </Container>
        </FooterSection>
    );
};

export default Footer;