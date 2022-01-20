import React from 'react';
import {
    BlockSite,
    InformTextPortfolio, LinkForSite, MainBlockForSite,
    SectionPortfolio, TextForSite,
} from "../../styled_components/Portfolio/Portfolio_styles";
import {Container} from "../../styled_components/Universal_styles";
import {Search} from "../../utils/Font Awesome/Solid";
import first from '../../images/weather_aplication.png'
import second from '../../images/hex_aplication.jpg'
import third from '../../images/math_aplication.jpg'

const arrayWebsitesObj = [
    {name: 'weather', href: first,},
    {name: 'hex_color', href: second,},
    {name: 'hi_aducation', href: third,}
]

const Portfolio = () => {

    return (
        <SectionPortfolio>
            <Container>
                <InformTextPortfolio>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque
                    iste laudantium magnam magni molestiae odit quod tempore velit voluptatem.
                </InformTextPortfolio>

                <MainBlockForSite>
                    {arrayWebsitesObj.map(link =>
                        <BlockSite key={link.name} background={link.href}>
                            <TextForSite>{link.name}</TextForSite>
                            <LinkForSite href={'#'} target={'_blank'}>{Search}</LinkForSite>
                        </BlockSite>
                    )}
                </MainBlockForSite>
            </Container>
        </SectionPortfolio>
    );
};

export default Portfolio;
