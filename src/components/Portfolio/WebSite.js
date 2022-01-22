import React from 'react';
import {BlockSite, LinkForSite, TextForSite} from "../../styled_components/Portfolio/Portfolio_styles";
import {Search} from "../../utils/Font Awesome/Solid";

const WebSite = ({href, name, blank, theme}) => {
    return (
        <BlockSite background={theme}>
            <TextForSite>{name}</TextForSite>
            <LinkForSite href={href} target={blank}>{Search}</LinkForSite>
        </BlockSite>
    );
};

export default WebSite;