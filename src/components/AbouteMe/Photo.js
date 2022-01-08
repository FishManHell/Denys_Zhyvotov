import React from 'react';
import {PhotoItem, WrapperPhoto} from "../../styled_components/AbouteMe/Aboute_styles";
import photo from '../../images/about_me.png'

const Photo = () => {
    return (
        <WrapperPhoto>
            <PhotoItem src={photo}/>
        </WrapperPhoto>
    );
};

export default Photo;
