'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Img from '@/../public/pic5.jpg'
import Img1 from '@/../public/image1.jpeg'
import Img2 from '@/../public/image2.jpeg'
import Img3 from '@/../public/image3.jpeg'
import Img4 from '@/../public/image4.jpeg'
import Img5 from '@/../public/image5.jpeg'
import Img6 from '@/../public/image6.jpeg'

const images=[Img1,Img2,Img3,Img4,Img5,Img6]
function TheTest(props) {
    const [currentImage,setCurrentImage] = useState(0)
    const handelImage=()=>{
        const image = images.length-1;
        setCurrentImage((handel)=>{
            return handel<image?currentImage+1:0})
    }
    return (
        <>
            <section className="  m-0 relative text font-serif subpixel-antialiased text-green-700">
                <header id={"App"} className=" bg-yellow-500 flex  justify-between">
<div id={"title"} className="flex  justify-between flex-col">
                <h1 className={"text-6xl leading-normal my-0 mx-5  "}>Zesty</h1>
                <h2 className={"mt-0 mb-5 mx-5 leading-normal text-xl fixed bottom-0 font-normal"}>PhotoGraphic Project <br/> by Elle Reese</h2>

            </div>
            <figure id={"image-container"} className="relative bg-white m-0 w-[50vw] ">
                <figcaption  className="text-3xl font-bold fixed  bottom-0 text-white m-auto left-[1300px] px-0 py-2 ">{currentImage + 1} / {images.length}</figcaption>
                <Image className={"h-svh object-cover "} src={images[currentImage]} alt={"hello"} onClick={handelImage}/>
            </figure>

            </header>
            </section>
        </>
    );
}

export default TheTest;
