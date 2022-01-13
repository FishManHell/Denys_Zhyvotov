import React from 'react';
import {
    BlockSite,
    InformTextPortfolio, LinkForSite, MainBlockForSite,
    SectionPortfolio,
    TitleTextPortfolio
} from "../../styled_components/Portfolio/Portfolio_styles";
import {Container} from "../../styled_components/Universal_styles";
import {Search} from "../../utils/Font Awesome/Solid";

const Portfolio = () => {
    return (
        <SectionPortfolio>
            <Container>
                <TitleTextPortfolio>Portfolio</TitleTextPortfolio>
                <InformTextPortfolio>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque
                    iste laudantium magnam magni molestiae odit quod tempore velit voluptatem.
                </InformTextPortfolio>

                <MainBlockForSite>
                    <BlockSite>
                        <LinkForSite href={'#'} target={'_blank'}>{Search}</LinkForSite>
                    </BlockSite>
                    <BlockSite>
                        <LinkForSite href={'#'} target={'_blank'}>{Search}</LinkForSite>
                    </BlockSite>
                    <BlockSite>
                        <LinkForSite href={'#'} target={'_blank'}>{Search}</LinkForSite>
                    </BlockSite>
                </MainBlockForSite>
            </Container>
        </SectionPortfolio>
    );
};

export default Portfolio;
