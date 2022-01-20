import React from 'react';
import {
    ItemNav,
    List,
    NavigationBlock,
    WrapperNav
} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";
import {Link} from "react-router-dom";

const objItemLink = [
    {link: '/home', name: 'home'},
    {link: '/vgn', name: 'vgn'},
    // {link: '/skills', name: 'skills'},
    {link: '/resume', name: 'resume'},
    {link: '/sites', name: 'sites'},
    {link: '/contact', name: 'contact'},
]

const Navigation = () => {

    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <List>
                        {objItemLink.map(item => <Link key={item.name} to={item.link}><ItemNav>{item.name}</ItemNav></Link>)}
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
