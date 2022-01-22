import React from 'react';
import {NavLink} from "react-router-dom";
import {ItemNav} from "../../styled_components/Navigation/Navigation_styles";

const ItemLink = ({name, link, close}) => {
    return (
        <ItemNav onClick={close}>
            <NavLink to={link}>
                {name}
            </NavLink>
        </ItemNav>
    );
};

export default ItemLink;