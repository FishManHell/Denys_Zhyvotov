import {
    AddressCard, At,
    Facebook,
    GitHub,
    Laptop,
    Linkedin, PaperPlane,
    Shield,
    Telegram,
    Twitter,
    User,
    UserCircle,
    UserGraduate, Users
} from "./Font Awesome/Solid";

export const objLinks = {
    facebook: '#',
    linKedin: 'https://www.linkedin.com/in/denys-zhyvotov-8683611b9/',
    twitter: '#',
    telegram: 'https://t.me/FishManhell',
    gitHub: 'https://github.com/FishManHell'
}

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

export const arrayFooterLink = [
    // {name: 'Facebook', link: objLinks.facebook, icon: Facebook},
    {name: 'LinKedin', link: objLinks.linKedin, icon: Linkedin},
    // {name: 'Twitter', link: objLinks.twitter, icon: Twitter},
    {name: 'Telegram', link: objLinks.telegram, icon: Telegram},
    {name: 'GitHub', link: objLinks.gitHub, icon: GitHub}
]


export const arrayInformItem = [
    {
        name: 'User',
        icon: User,
        text: "Hi everyone!\n" +
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

export const education = [
    {
        id: 1,
        title: '2016 \n General Education',
        text: 'Dnepropetrovsk College',
        percent: 98

    },
    {
        id: 2,
        title: '2018 \n IT School (Hillel)',
        text: 'Web developer',
        percent: 90

    },
    {
        id: 3,
        title: '2020 \n Tel-Ran',
        text: 'Web developer',
        percent: 98

    }
]

export const arrayWebsitesObj = [
    {name: 'weather', blank: '_blank', theme: "https://i.ibb.co/nR3QMBr/weather.png", href: '#'},
    {name: 'hex_color', blank: '_blank', theme: "https://i.ibb.co/nwH7gSN/hex-color.png", href: 'https://coloraplication.herokuapp.com/home'},
    {name: 'hi_education', blank: '_blank', theme: "https://i.ibb.co/f2nZtzG/hi-ducation.png", href: 'https://himathgaming.herokuapp.com/'}
]


export const arrayLeftSidebar = [
    {title: 'About', icon: UserCircle, simpleText: " Hi everyone! I'm 25 years old. I'm from Ukraine. Now I live in Israel. I have a good experience in front-end developing", check: false},
    {title: 'Contact', icon: AddressCard, simpleText: "Address: Tel-Aviv-Yafo\n Phone: (053) 220-12-30\n Email: denyszhyvotov@gmail.com", check: false},
    {title: 'References', icon: Users, simpleText: "Available upon request.", check: false},
    {title: 'Interests', icon: PaperPlane, simpleText: " I'm interested in sport I run, go to the gym, go to the movies and hang out with my friends. I love learning new technologies", check: false},
    {title: 'Connect', icon: At, itemLink: [{href: objLinks.gitHub, linkIcon: GitHub, nameIcon: 'GitHub', target: '_blank'}, {href: objLinks.linKedin, linkIcon: Linkedin, nameIcon: 'LinkedIn', target: '_blank'}], check: true}

]