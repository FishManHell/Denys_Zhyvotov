import React from 'react';
import {BlockLink, Link} from "../../styled_components/Footer/FooterStyles";

const SocialLink = ({link, icon}) => {
    return (
        <BlockLink>
            <Link href={link} target={'_blank'}>{icon}</Link>
        </BlockLink>
    );
};

export default SocialLink;