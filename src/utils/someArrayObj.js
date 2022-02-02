import {
    AddressCard, At,
    Facebook,
    GitHub,
    Laptop,
    Linkedin, PaperPlane, Search,
    Shield,
    Telegram,
    Twitter,
    User,
    UserCircle,
    UserGraduate, Users
} from "./Font Awesome/Solid";
import hexImage from '../images/hex_color.PNG'
import weatherImage from '../images/weather.PNG'
import mathImage from '../images/hi_ducation.PNG'

export const objImg = {
    hex: hexImage,
    weather: weatherImage,
    math: mathImage
}

export const objLinks = {
    facebook: '#',
    linKedin: 'https://www.linkedin.com/in/denys-zhyvotov-8683611b9/',
    twitter: '#',
    telegram: 'https://t.me/FishManhell',
    gitHub: 'https://github.com/FishManHell'
}

export const rightSkillsArray = [
    {text: 'Planning', width: '60%'},
    {text: 'HTML/CSS', width: '90%'},
    {text: 'JavaScript', width: '90%'},
    {text: 'React/Redux', width: '95%'}
]


export const leftSkillsArray = [
    {text: 'Communication', width: '70%'},
    {text: 'Organization', width: '65%'},
    {text: 'Learning', width: '65%'},
    {text: 'Programming', width: '95%'}
]

export const experienceArray = [
    {
        id: 1, title: 'Frontend Developer', year: '2020 - Present',
        information: [
            "Project analysis, communication with the team, team lido and designer.",
            "Website development, fix code, search information",
            "Active participation in the development of several large projects.",
            "Using only the latest technologies"
        ]
    },
    {
        id: 2, title: 'Frontend Developer', year: '2018 - 2019',
        information: [
            "Project analysis, communication with the team, team lido and designer, website development.",
            "Active participation in the development of several large projects.",
            "Using only the latest technologies"
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
            "I'm front-end developer from Ukraine.\n Now I live in Israel.\n" +
            "I have a good work experience in front-end developing."
    },
    {
        name: 'UserGraduate',
        icon: UserGraduate,
        text: "I have deep knowledge in software developing,\n" +
            "good understanding about projects, \nnew technologies,\n" +
            "ability to work in team. \n " +
            "I graduate Dnepropetrovsk college.\n" +
            "I have diploma computerization of medical equipment "
    },
    {
        name: 'Laptop',
        icon: Laptop,
        text: "I know several programming \n languages and libraries. \n" +
            "(HTML, Css, Sass, JavaScript, React, Redux) \nand other."
    },
    {
        name: 'Shield',
        icon: Shield,
        text: "I'm very responsible.\n" +
            "I can plane my working day, \nmake decisions.\n" +
            "I'm very sociable and always in touch with my colleges and customers."
    },
]

export const education = [
    {
        id: 1,
        title: 'General Education \n2016 ',
        text: 'Dnepropetrovsk College',
        percent: 98

    },
    {
        id: 2,
        title: 'IT School \n (Hillel) \n2018',
        text: 'Web developer',
        percent: 90

    },
    {
        id: 3,
        title: 'Tel-Ran \n (Masa Hi-Tech) \n2020  ',
        text: 'Web developer',
        percent: 98

    }
]

export const arrayWebsitesObj = [
    {
        name: 'weather',
        title: 'weather\napplication',
        blank: '_blank',
        theme: "https://i.ibb.co/nR3QMBr/weather.png",
        href: '#',
        icon: Search
    },
    {
        name: 'hex_color',
        title: 'color\napplication',
        blank: '_blank',
        theme: "https://i.ibb.co/nwH7gSN/hex-color.png",
        href: 'https://coloraplication.herokuapp.com/home',
        icon: Search
    },
    {
        name: 'hi_education',
        title: 'Hiducation \napplication',
        blank: '_blank',
        theme: "https://i.ibb.co/f2nZtzG/hi-ducation.png",
        href: 'https://himathgaming.herokuapp.com/',
        icon: Search
    }
]


export const arrayLeftSidebar = [
    {
        title: 'About', icon: UserCircle,
        simpleText: " Hi everyone! I'm 25 years old. I'm from Ukraine. Now I live in Israel. I have a good experience in front-end developing",
        check: false
    },
    {
        title: 'Contact', icon: AddressCard,
        simpleText: "Address: Tel-Aviv-Yafo\n Phone: (053) 220-12-30\n Email: denyszhyvotov@gmail.com",
        check: false
    },
    {
        title: 'References',
        icon: Users,
        simpleText: "Available upon request.",
        check: false
    },
    {
        title: 'Interests', icon: PaperPlane,
        simpleText: "I visit sport gym twice a week. I run every day early in the morning. " +
            "I like spend time with friends. I like to get new experience. I'm fond new technologies",
        check: false
    },
    {
        title: 'Connect', icon: At,
        itemLink: [
            {href: objLinks.gitHub, linkIcon: GitHub, nameIcon: 'GitHub', target: '_blank'},
            {href: objLinks.linKedin, linkIcon: Linkedin, nameIcon: 'LinkedIn', target: '_blank'}
        ],
        check: true
    }
]