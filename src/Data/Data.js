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

export const ResumeData =[
    {
        id: 1,
        heading:"My Skills",
        heading_1:"HTML",
        content:"95%",
        heading_2:"CSS",
        content_2:"85%",
        heading_3:"JavaScript",
        content_3:"60%",
        heading_4:"ReactJS",
        content_4:"80%",
        heading_5:"Bootstrap",
        content_5:"70%",
        heading_6:"Python",
        content_6:"60%",
        heading_7:"Django",
        content_7:"70%",
        heading_8:"Photoshop",
        content_8:"65%",
        

    }
]

export const EducationData=[
    {
        id: 1,
        heading:"Educational Qualifications",
        date:"2018-2021",
        heading_1:"Bachelor of Arts",
        title:"Himachal Pradesh University",
        content:"Graduated with a Bachelor of Arts in Geography and History from Himachal Pradesh University, where I developed strong analytical, critical thinking, and communication skills through a diverse curriculum that included humanities, social sciences, and arts.",
        date_2:"2022-2023",
        heading_2:"Full stack development",
        title_2:"CBitss",
        content_2:"Completed a full stack development course from CBitss, where I gained hands-on experience in developing web applications. I learned various technologies including HTML, CSS, JavaScript, React for front-end development, and Python, Django, and MySql for back-end development. The course also included training on version control using Github, deployment strategies, and best practices in software development.",

    },
    
]
export const BlogsData=[
    {
        id: 1,
        heading:"Blogs",
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/blog-image-1.jpg",
        content:"Markdown & Html supported blog.",
        imgsrc_2: process.env.PUBLIC_URL+"/images/contentimg/blog-image-2.jpg",
        content_2:"Installing NodeJS on your device.",
    },
]
export const MoreblogData=[
    {
        id: 1,
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/blog-image-3.jpg",
        content:"UI/UX design starter with Adobe XD.",
        imgsrc_2: process.env.PUBLIC_URL+"/images/contentimg/blog-image-4.jpg",
        content_2:"Boost your post for increasing sales.",
    },
    {
        id: 1,
        imgsrc: process.env.PUBLIC_URL+"/images/contentimg/blog-image-5.jpg",
        content:"Difference between GatsbyJS & NextJS.",
        imgsrc_2: process.env.PUBLIC_URL+"/images/contentimg/blog-image-6.jpg",
        content_2:"How to choose javascript framework for project.",
    },
]

export const ContactData =[
    {
        id: 1,
        heading:"Contact",
        heading_1:"Get in Touch",
       
    },
]

