import { Facebook, Github, Instagram,} from "react-bootstrap-icons";
export const Headerdata = [
    {
        id: 1,  
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/mani-1.jpeg", 
        clchange: "mani",  
    },
]
export const BannerData =[
    {
        id: 1,
        heading:"Hi, I am ",
        clchange:"Mani Ram",
        content: "I am a full stack developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
        clchange_1:"cont",
        Facebook:<Facebook color="blue" size={20} />,
        link:"https://www.facebook.com/maney.ram.50/",
        Instagram:<Instagram color="blue" size={20}/>,
        link_2:"https://www.instagram.com/mani_hp84/",
        Github:<Github color="blue" size={20}/>,
        link_3:"https://github.com/manihp84",
    }
]

export const AboutData =[
    {
        id: 1,
        heading:"About Me",
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/mani.jpeg",
    }
]