import React from 'react';
import {IconTextLink, ItemLink, MiniBlockConnect} from "../../../styled_components/Heading/LearnMore";

const ConnectBlock = ({href, target, linkIcon, nameIcon}) => {
    return (
        <MiniBlockConnect>
            <ItemLink href={href} target={target}>
                <IconTextLink>{linkIcon}</IconTextLink>
                <IconTextLink>{nameIcon}</IconTextLink>
            </ItemLink>
        </MiniBlockConnect>
    );
};

export default ConnectBlock;