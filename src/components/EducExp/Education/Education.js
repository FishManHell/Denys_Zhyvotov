import React from 'react';
import {
    BlockItem, Description,
    InformText, MainBlockForItemEduc,
    SectionGeneralInfo, TimeWhenStudy, TitleItem,
    TitleTextEducExp,
    WrapperEducation, WrapperForInfItemEduc, Years
} from "../../../styled_components/Education/Education_styles";

const Education = () => {
    return (
        <WrapperEducation>
            <TitleTextEducExp>My Education</TitleTextEducExp>
            <WrapperForInfItemEduc>
                <SectionGeneralInfo>
                    <InformText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea magni modi. Aperiam
                        blanditiis corporis debitis deleniti distinctio, eligendi eum excepturi magni mollitia nostrum
                        omnis, optio quaerat quisquam recusandae repellat.
                    </InformText>
                    <InformText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea magni modi. Aperiam
                        blanditiis corporis debitis deleniti distinctio, eligendi eum excepturi magni mollitia nostrum
                        omnis, optio quaerat quisquam recusandae repellat.
                    </InformText>
                </SectionGeneralInfo>

                <MainBlockForItemEduc>
                    <BlockItem>
                        <TitleItem>DMU</TitleItem>
                        <TimeWhenStudy>Reverse College 2012 - 2020</TimeWhenStudy>
                        <Years>8 year</Years>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem cumque dolore
                            ducimus eos esse laboriosam libero magni minus odit officia perferendis perspiciatis, quae
                            saepe sint suscipit vero voluptates voluptatum?
                        </Description>
                    </BlockItem>
                </MainBlockForItemEduc>
            </WrapperForInfItemEduc>
        </WrapperEducation>
    );
};

export default Education;
