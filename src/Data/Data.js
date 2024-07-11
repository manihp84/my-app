import { Brush, CodeSlash, Facebook, Github, Instagram, PcDisplay, SearchHeart,} from "react-bootstrap-icons";
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
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/mani-3.jpeg",
        searchicon: <SearchHeart color="white" size={80} />,
        heading_2: "I am",
        clchange:"Mani Ram",
        content: "I am a full stack developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
        listitem: "Full Name",
        name: "Mani Ram",
        listitem_1: "Age",
        age: "24",
        listitem_2: "Nationality",
        nation: "Indian",
        listitem_3: "Address",
        address: "Chandigarh, India",
        listitem_4: "Freelance",
        freelance: "available",

    }
]

export const AboutServiceData =[
    {
        id: 1, 
        heading:"Service",
        icon:<Brush color="blue" size={30}/>,
        heading_2:"Web design",
        content:"Designed and conceptualized visually appealing and user-friendly websites, focusing on modern aesthetics and user experience.",
        icon_2:<PcDisplay color="blue" size={30}/>,
        heading_3:"Frontend-Development",
        content_2:"Developed responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Bootstrap.",
        icon_3:<CodeSlash color="blue" size={30}/>,
        heading_4:"Backend-Development",
        content_3:"Developed and maintained scalable web applications using Python and Django, focusing on building secure backend systems.",
    }
]