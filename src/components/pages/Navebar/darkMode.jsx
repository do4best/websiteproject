'use client'
import React, {useEffect, useState} from 'react';
import {IoMoon, IoSunny} from "react-icons/io5";
import useTheme from "next-theme";
import Image from "next/image";
import {FiMoon, FiSun} from "react-icons/fi";
function DarkMode(props) {
    const [mounted, setMounted] = useState(false)
    const { systemTheme,theme,setTheme } = useTheme()
    const currentTheme = theme === 'system'?systemTheme:theme;

   return(
      <>
       {/*<button onClick={()=> currentTheme === 'dark'?setTheme('light'):setTheme('dark')}>Toggle </button>*/}
    {(currentTheme?<IoSunny onClick={()=> currentTheme === 'dark'?setTheme('light'):setTheme('dark')}/>:<IoMoon onClick={()=> currentTheme === 'dark'?setTheme('light'):setTheme('dark')}/>)}
      </>)

}

export default DarkMode;