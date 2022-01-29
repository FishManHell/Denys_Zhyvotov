import React from 'react';
import {List, NavigationBlock, WrapperNav} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";
import ItemLink from "./ItemLink";
import Burger from "./BurgerMenu/Burger";
import {arrayItemLink} from "../../utils/RouterArrayObj/routePage";

const Navigation = ({burger, close, closeOpen}) => {
    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <Burger burger={burger} closeOpen={closeOpen}/>
                    <List openMenu={burger ? 'openMenu' : null}>
                        {arrayItemLink.map(item => <ItemLink key={item.name} {...item} close={close}/>)}
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
