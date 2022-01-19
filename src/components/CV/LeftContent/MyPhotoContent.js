import React from 'react';
import {BlockImage, Photo} from "../../../styled_components/Heading/LearnMore";
import MyPhoto from "../../../images/123.jpg";

const MyPhotoContent = () => {
    return (
        <BlockImage>
            <Photo src={MyPhoto}/>
        </BlockImage>
    );
};

export default MyPhotoContent;