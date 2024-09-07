"use client";
import { FaArrowRight, FaCopyright, FaFacebook, FaInstagram, FaRegArrowAltCircleRight,FaRegCopyright,FaTwitter } from "react-icons/fa";
import Link from "next/link"


export function Footer(){


    let newsletterHandler = function(e){
        e.preventDefault()
    }
    return(        
        <div className="flex flex-col h-auto mt-12  w-full gap-8 px-4 items-center">
            <p className="text-blue-800 font-bold text-lg text-left w-full sm:w-auto">stay Tuned</p>
            <p className="dark:text-white text-black text-3xl text-left w-full sm:w-auto"> subscribe to our productsletter </p>
            <form onSubmit={newsletterHandler} className="flex pb-3 justify-between w-full border-b-2 border-blue-500 sm:w-3/4 lg:w-2/4">
            <input type="text" id="newsLetter" placeholder="enter your email here" className="outline-none border-none bg-transparent dark:bg-transparent"/>
            <FaArrowRight className="text-blue-600"/>
            </form>
            <div className=" w-auto flex h-12 gap-4 lg:gap-6">
                <p className="dark:text-white text-sm md:text-xl text-black font-bold sm:font-medium">Lets get</p>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaFacebook className="text-xl sm:text-2xl lg:text-3xl text-blue-500"/>                
                </Link>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaInstagram className="text-xl sm:text-2xl lg:text-3xl text-blue-500"/>                
                </Link>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaTwitter className="text-xl sm:text-2xl lg:text-3xl text-blue-500"/>                
                </Link>
                <p className="dark:text-white text-sm md:text-xl text-black font-bold sm:font-medium">social</p>
            </div>
            <p className="text-xl md:text-xl text-pink-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">What</span>
                    <span className="text-blue-500 flex items-center" >She</span>
                    <span className="text-purple-500 flex items-center">Wears</span>
            </p>
            <div className="w-full text-xl flex items-center justify-center gap-2 h-12">
                <span>copyright</span>
                <FaRegCopyright className="text-blue-600"/>
                <span>2024</span>
            </div>
            <div className="w-full h-4">
            </div>
        </div>
    )
}