import React from 'react';
import {
    List,
    NavigationBlock,
    WrapperNav
} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";
import {arrayItemLink} from "../../utils/someArrayObj";
import ItemLink from "./ItemLink";



const Navigation = () => {

    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <List>
                        {arrayItemLink.map(item => <ItemLink key={item.name} {...item}/>)}
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
