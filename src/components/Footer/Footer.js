import React from 'react';
import {Container} from "../../styled_components/Universal_styles";
import {
    MainBlockWithLinkContact,
    FooterSection,
    TextFooter,
    BlockLink, Link
} from "../../styled_components/Footer/FooterStyles";
import {Facebook, GitHub, LinKedin, Telegram, Twitter} from "../../utils/Font Awesome/Solid";

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <TextFooter>Copyrigtht 2014 focal - Built With Passion</TextFooter>
                <MainBlockWithLinkContact>
                    <BlockLink>
                        <Link href={'#'} target={'_blank'}>{Facebook}</Link>
                    </BlockLink>
                    <BlockLink>
                        <Link href={'https://www.linkedin.com/in/denys-zhyvotov-8683611b9/'} target={'_blank'}>{LinKedin}</Link>
                    </BlockLink>
                    <BlockLink>
                        <Link href={'#'} target={'_blank'}>{Twitter}</Link>
                    </BlockLink>
                    <BlockLink>
                        <Link href={'https://t.me/FishManhell'} target={'_blank'}>{Telegram}</Link>
                    </BlockLink>
                    <BlockLink>
                        <Link href={'https://github.com/FishManHell'} target={'_blank'}>{GitHub}</Link>
                    </BlockLink>
                </MainBlockWithLinkContact>
            </Container>
        </FooterSection>
    );
};

export default Footer;