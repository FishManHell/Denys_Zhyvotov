import React from 'react';
import {
    Icon, InformationText,
    MainBlockWithMiniBlock, MiniBlock,
    MiniBlockAboutMe,
    SubtitleText,
    WrapperInformation
} from "../../styled_components/AbouteMe/Aboute_styles";
import {TitleText} from "../../styled_components/Universal_styles";
import {Laptop, Shield, User, UserGraduate} from "../../utils/Font Awesome/Solid";

const Information = () => {
    return (
        <WrapperInformation>
            <TitleText margin_bottom={'50px'}>About Me</TitleText>
            <MainBlockWithMiniBlock>
                <MiniBlock>
                    <Icon>{User}</Icon>
                    <InformationText>
                        Hi everyone! My name is Denys.
                        <br/>I'm front-end developer from Ukraine.
                        <br/>Now I live in Israel.
                        <br/>I have a good work experience in front-end developing.
                    </InformationText>
                </MiniBlock>
                <MiniBlock>
                    <Icon>{UserGraduate}</Icon>
                    <InformationText>
                        I have deep knowledge's in software developing, <br/>good understanding about projects,
                        <br/>good understanding of new technologies, <br/>ability to work in team.
                    </InformationText>
                </MiniBlock>
                <MiniBlock>
                    <Icon>{Laptop}</Icon>
                    <InformationText>
                        I know several programming languages and libraries
                        <br/>(HTML, CSS, JavaScript, React, Redux, Redux-Toolkit, Formik, Axios)
                        <br/>AND OTHER.
                    </InformationText>
                </MiniBlock>
                <MiniBlock>
                    <Icon>{Shield}</Icon>
                    <InformationText>
                        I'm very responsible.<br/>I can plane my working day, make right decisions.
                        <br/>I'm very sociable and always in touch with my colleges and customers.
                    </InformationText>
                </MiniBlock>
            </MainBlockWithMiniBlock>
            {/*<SubtitleText>*/}
            {/*    Hi everyone! My name is Denys. I'm front-end developer from Ukraine, live in Israel.*/}
            {/*    <br/>I have a good work experience in front-end developing, I know several programming languages and*/}
            {/*    libraries*/}
            {/*    <br/>(HTML, CSS, JavaScript, React, Redux, Redux-Toolkit, Formik, Axios) and other.*/}
            {/*    <br/>I have deep knowledge's in software developing, good understanding about projects, good*/}
            {/*    understanding of new technologies, ability to work in team.*/}
            {/*    <br/>I'm very responsible.*/}
            {/*    <br/>I can plane my working day, make right decisions.*/}
            {/*    <br/>I'm very sociable and always in touch with my colleges and customers.*/}
            {/*</SubtitleText>*/}
            <MiniBlockAboutMe>
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*<MiniItem/>*/}
                {/*подумать что с этим делать потом */}
            </MiniBlockAboutMe>
        </WrapperInformation>
    );
};

export default Information;
