import React from 'react';
import {BlockForBurgerMenu, LineForBurgerMenu} from "../../../styled_components/Navigation/BurgerMenu";

const Burger = ({burger, closeOpen}) => {
    return (
        <BlockForBurgerMenu openMenu={burger} className={burger ? 'openMenu' : null} onClick={closeOpen}>
            <LineForBurgerMenu/>
        </BlockForBurgerMenu>
    );
};

export default Burger;