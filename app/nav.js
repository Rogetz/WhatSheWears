'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import {useRef,useEffect,useState} from "react"
import {FaShoppingCart, FaSun,FaMoon,FaBars,FaRegWindowClose} from "react-icons/fa"
import Logo from "../assets/logo.jpg"
import {Cart} from "./components/cart"
import clsx from "clsx"
import Image from "next/image"
import {useTheme} from "next-themes"

export function NavComponents(){
    const {setTheme,resolvedTheme} = useTheme()
    const [menuState,setMenuState] = useState(<div className="hidden"></div>)
    const [darkState,setDarkState] = useState(<FaSun className="text-2xl animate-[spin_0.3s_ease-in-out_1] dark:text-green-500"/>)
    // detects the current path that they are in.
    const pathName = usePathname()
    const [cartState,setCartState] = useState()


    // The link we're using is from next hence I can't access the native link element through react's href-

    useEffect(function(){
        if(resolvedTheme == "dark"){
            setDarkState(<FaSun className="text-2xl animate-[spin_0.3s_ease-in-out_1] dark:text-green-500"/>)
        }
        else{
            setDarkState(<FaMoon className="text-2xl animate-[spin_0.3s_ease-in-out_1] text-black"/>)
        }
    },[])

    let links = [{name: "home",href:"/"},{name: "dresses",href:"/categories/dresses"},{name: "blouses",href:"/categories/blouses"},{name: "skirts",href:"/categories/skirts"}]

    let cartHandler = function(e){
        e.preventDefault()
        setCartState(<Cart setCartState={setCartState}/>)
    }
    let lightHandler = function(e){
        e.preventDefault()
        if(resolvedTheme == "dark"){
            setDarkState(<FaMoon className="text-2xl animate-[spin_0.3s_ease-in-out_1] text-black"/>)
            setTheme('light')
        }
        else{
            setDarkState(<FaSun className="text-2xl animate-[spin_0.3s_ease-in-out_1] dark:text-green-500"/>)
            setTheme('dark')
        }
    }

    let listToggler = function(e){
        e.preventDefault()
        setMenuState(<HamburgerMenu itemsList={links} setMenuState={setMenuState}/>)
    }

    return (
        <>
            <div className="dark:bg-black dark:text-slate-600 w-auto z-20 bg-white drop-shadow-sm mx-0 lg:mx-4 lg:mt-3 sticky top-0 lg:top-2 shadow-black shadow-sm lg:rounded-3xl mb-0 lg:mb-5 px-6 h-12 md:h-16 bg-white-700 box-border overflow-hidden flex items-center justify-between">
                <p className="text-xl md:text-xl text-pink-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">What</span>
                    <span className="text-blue-500 flex items-center" >She</span>
                    <span className="text-purple-500 flex items-center">Wears</span>
                </p>
                <button onClick={lightHandler}>
                    {darkState}
                </button>
                <div className="hidden w-6/12 h-full md:flex items-center justify-evenly">
                {links.map(function(link,index){
                    // use clsx later for conditional styling for now am using the ref
                    return (<Link className={clsx("text-center  md:flex items-center hover:text-blue-600 text-xl px-3 py-2 rounded-3xl hover:bg-white-950 border-blue-750",{"text-blue-700 border-b-2 border-pink-500": link.href == pathName,"text-black dark:text-slate-600": link.href != pathName})}  key={link.href} name={link.name} href={link.href}>{link.name}</Link>)        
                })}        
                </div>
                <button className="w-12 h-full flex flex-col justify-center items-center text-xl text-center" onClick={cartHandler}><FaShoppingCart className="text-xl text-blue-700"/><span className="hidden text-center sm:block text-sm lg:text-xl">cart</span></button>
                <button onClick={listToggler} className="block lg:hidden">
                    <FaBars className="text-2xl"/>
                </button>
            </div>
            {cartState}
            {menuState}
        </>
    )
}


export function HamburgerMenu({itemsList,setMenuState}){
    const pathName = usePathname()
    // each item in the item list must have a name and a link property
    // for each nested item just add a nestedList array property to the current item
    let cancelHandler = function(e){
        e.preventDefault()
        setMenuState("")
    }
    return(
        <div className="fixed drop-shadow-xl right-0 top-0 z-30 px-3 flex flex-col items-end  overflow-auto h-full w-3/4 sm:w-1/3 bg-white dark:bg-black shadow-lg shadow-blue-700  dark:text-white text-green-950">
            <div className="w-full flex justify-between h-12 px-3 pt-3  mb-4">
                <p className="text-xl md:text-xl text-pink-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">What</span>
                    <span className="text-blue-500 flex items-center" >She</span>
                    <span className="text-purple-500 flex items-center">Wears</span>
                </p>
                <FaRegWindowClose className="text-2xl text-blue-500 " onClick={cancelHandler}/>
            </div>
            <p className="w-full text-slate-600 text-left font-medium mb-2">menu</p>
            <div className= "h-4/5 w-full overflow-auto flex flex-col gap-4">
            {itemsList != undefined && itemsList != null ? 
                itemsList.map(function(item){
                    return  <div className="w-full h-auto flex flex-col gap-2 items-end" >
                        <Link key={item.href} name={item.name} href={item.href} className={clsx("font-medium w-full h-auto py-2 pl-3 rounded-xl",{"text-white dark:text-blue-700  bg-blue-500  dark:bg-gray-300 ": item.href == pathName,"text-white dark:text-blue-950 dark:bg-gray-400 bg-blue-950 ": item.href != pathName})}>
                            {item.name}                        
                        </Link>
                        {/*check the inner list property*/}
                        {item.innerList != undefined ?
                        item.innerList.map(function(nestedItem){
                            return <div className="w-full h-auto pl-4 mt-2 ml-6">
                                <Link key={nestedItem.href} name={nestedItem.name} href={nestedItem.href} className={clsx("font-medium w-full h-auto py-2 px-3 rounded-xl",{"text-white dark:text-white dark:bg-white-500  ": item.href == pathName,"text-white dark:text-slate-500 bg-green-950 dark:bg-green-950": item.href != pathName})} >
                                {nestedItem.name}                        
                                </Link>          
                            </div>
                        })
                        :
                        <div className="hidden"></div>
                    }
                    </div>
            })
            :
            <div className="hidden"></div>
            }
            </div>
        </div>
    )
}
