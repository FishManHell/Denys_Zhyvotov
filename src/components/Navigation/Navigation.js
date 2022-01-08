import React from 'react';
import {ItemNav, List, Logo, NavigationBlock, WrapperNav} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";

const Navigation = () => {
    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <Logo>LOGO</Logo>
                    <List>
                        <ItemNav>home</ItemNav>
                        <ItemNav>about me</ItemNav>
                        <ItemNav>skills</ItemNav>
                        <ItemNav>CV</ItemNav>
                        <ItemNav>testimonials</ItemNav>
                        <ItemNav>portfolio</ItemNav>
                        <ItemNav>contact me</ItemNav>
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
