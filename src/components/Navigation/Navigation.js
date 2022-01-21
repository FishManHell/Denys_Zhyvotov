import React from 'react';
import {
    ItemNav,
    List,
    NavigationBlock,
    WrapperNav
} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";
import {Link} from "react-router-dom";
import {arrayItemLink} from "../../utils/someArrayObj";



const Navigation = () => {

    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <List>
                        {arrayItemLink.map(item => <Link key={item.name} to={item.link}><ItemNav>{item.name}</ItemNav></Link>)}
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
