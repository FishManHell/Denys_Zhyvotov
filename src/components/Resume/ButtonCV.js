import React from 'react';
import {BlockButtonResume, DownloadButton} from "../../styled_components/Resume/Resume_styled";
import resume from '../../utils/CV_Denys_Zh_Front-End Developer.docx'

const ButtonCv = ({value}) => {
    return (
        <BlockButtonResume>
            <DownloadButton href={resume}>{value}</DownloadButton>
        </BlockButtonResume>
    );
};

export default ButtonCv;