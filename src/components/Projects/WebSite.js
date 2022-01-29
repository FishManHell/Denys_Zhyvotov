import React from 'react';
import {BlockSite, LinkForSite, MainBlockSite, TitleTextSite} from "../../styled_components/Portfolio/Portfolio_styles";

const WebSite = ({href, blank, theme, icon, title}) => {
    return (
        <MainBlockSite>
            <TitleTextSite>{title}</TitleTextSite>
            <BlockSite background={theme}>
                <LinkForSite href={href} target={blank}>{icon}</LinkForSite>
            </BlockSite>
        </MainBlockSite>
    );
};

export default WebSite;