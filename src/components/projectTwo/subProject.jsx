import React from 'react';
import Image from "next/image";
import logo from '../../../public/logo.svg'
function SubProject(props) {
    const message = (name)=>{
        return `${name} is developer`
    }
    return (
        <>
<div className="text-white bg-blue-700 w-svw h-svh m-0 p-0 overflow-hidden antialiased ">
    <div className="bordered  flex cursor-auto fixed left-[400px] w-[1200px] z-1 items-center justify-center p-3">
      <Image className={"h-auto w-max-[760px] w-svw"} src={logo} alt={"This is logo"}/>
    </div>
    
    <div className="bordered flex cursor-auto fixed w-svw z-1 bottom-0 justify-between p-4">
        <h2 className="text-3xl font-bold line-clamp-2 p-4 m-0 after:content=['] text-white block absolute h-1 left-[15px] right-[15px]"></h2>
    </div>
            </div>
        </>
    );
}

export default SubProject;