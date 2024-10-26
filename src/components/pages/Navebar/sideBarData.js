import {FaHome} from "react-icons/fa";
import {LiaServerSolid, LiaServicestack} from "react-icons/lia";
import {FcAbout} from "react-icons/fc";
import {IoMdContact} from "react-icons/io";

export const sideBarData=[{
    title:"Home",
    icon:<FaHome/>,
    path:"#home"
},
    {
        title:"Services",
        icon:<LiaServicestack/>,
        path:"#services"
    },
    {
        title:"About",
        icon:<FcAbout/>,
        path:"#about"
    },
    {
        title:"Contact",
        icon:<IoMdContact/>,
        path:"#contact"
    }]