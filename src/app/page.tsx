'use client'
import Image from "next/image";
import About from './components/About';
import Navbar from "./components/Navbar";
import  Header  from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import Footer from './components/Footer';
import { useEffect, useState } from "react";


export default function Home() {

  const[isDarkMode,setIsDarkMode]=useState(true);

   useEffect(()=>{
    if(localStorage.theme==='dark' || (!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
   },[])


  useEffect(()=>{
     if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
     }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
     }
  },[])
  return (
   <>
     <Navbar  isDarkMode= {isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Header/>
     <About />
     <Services/>
     <Work />
     <Experience />
     <Contact/>
     <Footer/>
     
   </>
  );
}