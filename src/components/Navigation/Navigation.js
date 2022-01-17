import React, {useEffect, useState} from 'react';
import {
    Image,
    ItemNav,
    List,
    Logo,
    NavigationBlock,
    WrapperNav
} from "../../styled_components/Navigation/Navigation_styles";
import {Container} from "../../styled_components/Universal_styles";
import {Link, Events} from "react-scroll";
import logo from '../../images/bowtie.svg'

const Navigation = () => {
    const [nav, ] = useState(['home', 'about me', 'skills', 'cv', 'edu&exp', 'portfolio', 'contact me'])

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
        });

        return Events.scrollEvent.register('end', function () {
        });
    }, [])


    return (
        <WrapperNav>
            <Container>
                <NavigationBlock>
                    <Logo>
                        <Image src={logo}/>
                    </Logo>
                    <List>
                        {nav.map(link => <Link key={link} to={link} spy={true} smooth={true} duration={1000}><ItemNav>{link}</ItemNav></Link>)}
                    </List>
                </NavigationBlock>
            </Container>
        </WrapperNav>
    );
};

export default Navigation;
