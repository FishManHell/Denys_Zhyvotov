import React, {useState} from 'react';
import {
    Icon, InformationText,
    MainBlockWithMiniBlock, MiniBlock,
    WrapperInformation
} from "../../styled_components/AbouteMe/Aboute_styles";
import {TitleText} from "../../styled_components/Universal_styles";
import {Laptop, Shield, User, UserGraduate} from "../../utils/Font Awesome/Solid";

const Information = () => {
    const [miniBlock, setMiniBlock] = useState([
        {
            name: 'User',
            icon: User,
            text: "Hi everyone! My name is Denys.\n" +
                "I\'m front-end developer from Ukraine.\n Now I live in Israel.\n" +
                "I have a good work experience in front-end developing."
        },
        {
            name: 'UserGraduate',
            icon: UserGraduate,
            text: "I have deep knowledge in software developing,\n" +
                "good understanding about projects,\n" +
                "good understanding of new technologies,\n" +
                "ability to work in team."
        },
        {
            name: 'Laptop',
            icon: Laptop,
            text: "I know several programming \n languages and libraries."
            // "(HTML, CSS, JavaScript, React, Redux, Redux-Toolkit, Formik, Axios)\n" +
            //     "AND OTHER."
        },
        {
            name: 'Shield',
            icon: Shield,
            text: "I'm very responsible." +
                "I can plane my working day, make right decisions.\n" +
                "I'm very sociable and always in touch with my colleges and customers."
        },
    ])


    return (
        <WrapperInformation>
            <TitleText margin_bottom={'50px'}>About Me</TitleText>
            <MainBlockWithMiniBlock>
                {miniBlock.map(block =>
                    <MiniBlock key={block.name}>
                        <Icon>{block.icon}</Icon>
                        <InformationText>{block.text}</InformationText>
                    </MiniBlock>
                )}
            </MainBlockWithMiniBlock>
        </WrapperInformation>
    );
};

export default Information;
