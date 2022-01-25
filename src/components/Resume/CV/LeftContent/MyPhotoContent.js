import React from 'react';
import {BlockImage, Photo} from "../../../../styled_components/Heading/LearnMore";


const MyPhotoContent = ({link}) => {

    return (
        <BlockImage>
            <Photo src={link}/>
        </BlockImage>
    );
};

export default MyPhotoContent;