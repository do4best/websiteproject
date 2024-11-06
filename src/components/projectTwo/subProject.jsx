'use client'
import React from 'react';
import Image from "next/image";
import logo from '../../../public/logo.svg'
import pic from '../../../public/image11.jpeg'
import s from './style.module.css'
import ImageBox from './imgeBox'

const matrix = [0,1,2,3,4]
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
    <div className={s.wrapper}>
   <div className={s['imageContainer']}>
       {matrix.map((item,index)=> (
           <div key={index} className={s.Rmage} x={x}/>
       ))}

   </div>
    </div>
    <div className="bordered flex cursor-auto fixed w-svw z-1 bottom-0 justify-between p-4">
        <h2 className="text-3xl font-bold m-0 p-4">June
            12</h2>
        <h2 className=" text-center bg-white h-[1px] flex-1 font-bold m-0 p-4 relative after:content-[''] after:block   after:content-absolute after:content-h-[2px] after:content-left-[20px] after:content-right-[150px] after:content-top-[55%] ">World Tour</h2>
        <h2 className="text-3xl font-bold m-0 p-4">August
            12</h2>
    </div>
</div>
        </>
    );
}

export default SubProject;