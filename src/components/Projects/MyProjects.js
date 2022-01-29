import React from 'react';
import {MainBlockForSite, SectionPortfolio} from "../../styled_components/Portfolio/Portfolio_styles";
import {Container} from "../../styled_components/Universal_styles";
import {arrayWebsitesObj} from "../../utils/someArrayObj";
import WebSite from "./WebSite";


const MyProjects = () => {
    return (
        <SectionPortfolio>
            <Container>
                <MainBlockForSite>
                    {arrayWebsitesObj.map(link => <WebSite key={link.name} {...link}/>)}
                    {/*дописать названия приложений*/}
                </MainBlockForSite>
            </Container>
        </SectionPortfolio>
    );
};

export default MyProjects;
