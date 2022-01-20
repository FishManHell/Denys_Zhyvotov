import React from 'react';
import {WrapperInformation} from "../../styled_components/Heading/LearnMore";
import LeftSidebar from "./LeftContent/LeftSidebar";
import RightSidebar from "./RightContent/RightSidebar";

const LearnMore = () => {
    return (
        <WrapperInformation>
            <LeftSidebar/>
            {/*подумать как разделить left sidebar*/}
            <RightSidebar/>
        </WrapperInformation>
    );
};

export default LearnMore;