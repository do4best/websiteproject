'use client'

import React, {useState} from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import {sideBarData} from "@/components/pages/Navebar/sideBarData";
import InnerNave from "@/components/pages/Navebar/innerNave";


function Header(props) {
    const [isOpen,setIsOpen] = useState(false)
    const handelClick=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>

            <div className={`w-[250px] h-full bg-gray-800 text-white fixed top-0 left-0 ${!isOpen ? 'w-full' : ''}`}>

                <div className="flex items-center bg-gray-700 justify-between p-2">
                    <button className={"cursor-pointer bg-none border-none flex items-center p-1"}
                            onClick={handelClick}>
                        <div>{isOpen ? <FaArrowLeft/> : <><FaArrowRight/><InnerNave/></>}</div>


                    </button>
                    <div className="text-center"><h2
                        className="text-nowrap font-serif font-bold text-red-400">{isOpen ? "My App" : ""}</h2></div>
                </div>
                <nav>
                    <ul>
                        {sideBarData?.map((item, index) => (
                            <li key={index} className={"text-white text-center"}>
                                <a href={item.path}>
                                    <div className={"text-white text-center flex flex-col justify-evenly"}>
                                        {item.icon}
                                        {isOpen ? item.title : ""}  </div>
                                </a>
                            </li>
                        ))

                        }
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;