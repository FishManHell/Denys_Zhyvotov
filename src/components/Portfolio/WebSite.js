import React from 'react';
import {BlockSite, LinkForSite} from "../../styled_components/Portfolio/Portfolio_styles";

const WebSite = ({href, blank, theme, icon}) => {
    return (
        <BlockSite background={theme}>
            <LinkForSite href={href} target={blank}>{icon}</LinkForSite>
        </BlockSite>
    );
};

export default WebSite;