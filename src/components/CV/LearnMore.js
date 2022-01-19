import React from 'react';
import {WrapperInformation, BackgroundLM} from "../../styled_components/Heading/LearnMore";
import LeftSidebar from "./LeftContent/LeftSidebar";
import RightSidebar from "./RightContent/RightSidebar";

const LearnMore = ({open, closeInform}) => {

    return (
        <>
            <BackgroundLM visible={open ? 'visible' : ''} onClick={closeInform}/>
            <WrapperInformation visible={open ? 'visible' : ''}>
                <LeftSidebar/>
                {/*подумать как разделить left sidebar*/}
                <RightSidebar open={open}/>
            </WrapperInformation>
        </>

    );
};

export default LearnMore;