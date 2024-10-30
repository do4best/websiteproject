import React from 'react';
import Image from "next/image";
import Img from '../../../../public/pic5.jpg'
import {FaArrowLeft} from "react-icons/fa6";
function InnerNave(props) {
    return (
        <>
        <div className="w-full h-full  flex flex-row ">

            <div className="w-1/2 h-svh flex flex-col justify-between bg-green-300">
                <div className="sticky top-1 left-2 pl-4">
                    <FaArrowLeft size={30}/>
                </div>
                <ul className={"absolute top-[300px] left-[200px] flex flex-col gap-8 font-serif text-gray-500"}>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Our Club</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="w-1/2 h-svh">
                <Image className={"h-svh w-svw"} src={Img} alt={"The Woman"} />
            </div>

        </div>
        
        </>
    );
}

export default InnerNave;