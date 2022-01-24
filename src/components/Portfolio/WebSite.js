import React from 'react';
import {BlockSite, LinkForSite} from "../../styled_components/Portfolio/Portfolio_styles";
import {Search} from "../../utils/Font Awesome/Solid";

const WebSite = ({href, blank, theme}) => {
    return (
        <BlockSite background={theme}>
            <LinkForSite href={href} target={blank}>{Search}</LinkForSite>
        </BlockSite>
    );
};

export default WebSite;