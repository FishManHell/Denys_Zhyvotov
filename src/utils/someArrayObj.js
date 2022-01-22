import {Facebook, GitHub, Laptop, LinKedin, Shield, Telegram, Twitter, User, UserGraduate} from "./Font Awesome/Solid";

export const rightSkillsArray = [
    {text: 'Communication', width: '70%'},
    {text: 'Organization', width: '65%'},
    {text: 'Learning', width: '65%'},
    {text: 'Programming', width: '95%'}
]


export const leftSkillsArray = [
    {text: 'Planning', width: '60%'},
    {text: 'HTML/CSS', width: '90%'},
    {text: 'JavaScript', width: '90%'},
    {text: 'React/Redux', width: '95%'}
]


export const experienceArray = [
    {
        id: 1, title: 'Frontend Developer', year: '2020 - Present',
        information: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Illo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnam.',
            'consequuntur optio odio nam vitae, labore architecto magni et libero officiisculpa.'
        ]
    },
    {
        id: 2, title: 'Frontend Web Developer', year: '2018 - 2019',
        information: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Illo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnam.',
            'consequuntur optio odio nam vitae, labore architecto magni et libero officiisculpa.'
        ]
    },

]


export const arrayItemLink = [
    {link: '/home', name: 'home'},
    {link: '/vgn', name: 'vgn'},
    {link: '/resume', name: 'resume'},
    {link: '/sites', name: 'sites'},
    {link: '/contact', name: 'contact'},
]

export const arrayFooterLink = [
    {name: 'Facebook', link: '#', icon: Facebook},
    {name: 'LinKedin', link: 'https://www.linkedin.com/in/denys-zhyvotov-8683611b9/', icon: LinKedin},
    {name: 'Twitter', link: '#', icon: Twitter},
    {name: 'Telegram', link: 'https://t.me/FishManhell', icon: Telegram},
    {name: 'GitHub', link: 'https://github.com/FishManHell', icon: GitHub}
]


export const arrayInformItem = [
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
    },
    {
        name: 'Shield',
        icon: Shield,
        text: "I'm very responsible." +
            "I can plane my working day, make right decisions.\n" +
            "I'm very sociable and always in touch with my colleges and customers."
    },
]

export const experiences = [
    {
        id: 1,
        title: '2016 \n General Education',
        text: 'Dnipropetrovsk College',
        percent: 98

    },
    {
        id: 2,
        title: '2018 \n IT School (Hillel)',
        text: 'Web developer',
        percent: 75

    },
    {
        id: 3,
        title: '2020 \n Tel-Ran',
        text: 'Web developer',
        percent: 90

    }
]