import React from 'react';
import {
    InformTextPortfolio, MainBlockForSite,
    SectionPortfolio,
} from "../../styled_components/Portfolio/Portfolio_styles";
import {Container} from "../../styled_components/Universal_styles";
import {arrayWebsitesObj} from "../../utils/someArrayObj";
import WebSite from "./WebSite";


const Portfolio = () => {

    return (
        <SectionPortfolio>
            <Container>
                <InformTextPortfolio>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque
                    iste laudantium magnam magni molestiae odit quod tempore velit voluptatem.
                </InformTextPortfolio>

                <MainBlockForSite>
                    {arrayWebsitesObj.map(link => <WebSite key={link.name} {...link}/>)}
                </MainBlockForSite>
            </Container>
        </SectionPortfolio>
    );
};

export default Portfolio;
