import React, {useState} from 'react';
import {
    BlockSite,
    InformTextPortfolio, LinkForSite, MainBlockForSite,
    SectionPortfolio, TextForSite,
} from "../../styled_components/Portfolio/Portfolio_styles";
import {Container, TitleText} from "../../styled_components/Universal_styles";
import {Search} from "../../utils/Font Awesome/Solid";
import first from '../../images/weather_aplication.png'
import second from '../../images/hex_aplication.jpg'
import third from '../../images/math_aplication.jpg'

const Portfolio = () => {
    const [site, setSite] = useState([
        {name: 'weather', href: first,},
        {name: 'hex_color', href: second,},
        {name: 'hi_aducation', href: third,}
    ])
    return (
        <SectionPortfolio name={'portfolio'}>
            <Container>
                <TitleText margin_bottom={'50px'} text_align={'center'}>Portfolio</TitleText>
                <InformTextPortfolio>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque
                    iste laudantium magnam magni molestiae odit quod tempore velit voluptatem.
                </InformTextPortfolio>

                <MainBlockForSite>
                    {site.map(link =>
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
