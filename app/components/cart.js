"use client";

import {FaWindowClose,FaCalendarMinus} from "react-icons/fa"
import Image from "next/image"
import {useState,useEffect,useRef} from "react"
import tempImage from "../../whatshewearsLogoInspiration2.PNG"
import green_dotted_dress from "../../assets/green_dotted_dress.jpg"
import beachDress from "../../assets/beach_dress.jpg"
import greener_baloon_dress from "../../assets/greener_baloon_dress.jpg"
import short_checked_dress from "../../assets/short_checked_dress.jpg"
import tight_pink_dress from "../../assets/tight_pink_dress.jpg"
import yellow_coat from "../../assets/yellow_coat.jpg"

import Logo from "../../assets/logo.jpg"
import { nameFilter } from "./products"


function storageFilter(cartItems){
    if(cartItems != null){
        let finalArr = cartItems.split("-")
        let lastArr = finalArr.map(function(item,index){
            let parsedItem = JSON.parse(item)
            return parsedItem
        })
        return lastArr
    }    
}

let products = [
    {
        name: "yellow_coat",
        price: 5,
        category: "dress",
        imagery: yellow_coat
    },
    {
        name: "tight_pink_dress",
        price: 5,
        category: "dress",
        imagery: tight_pink_dress
    },
    {
        name: "short_checked_dress",
        price: 5,
        category: "dress",
        imagery: short_checked_dress
    },
    {
        name: "greener_baloon_dress",
        price: 5,
        category: "dress",
        imagery: greener_baloon_dress
    },
    {
        name: "beachDress",
        price: 5,
        category: "dress",
        imagery: beachDress
    },
    {
        name: "green_dotted_dress",
        price: 5,
        category: "dress",
        imagery: green_dotted_dress
    },
]

export function Cart({setCartState}){
    const [cartProductsState,setCartProductsState] = useState()
    let closeHandler = function(e){
        setCartState("")
    }
    useEffect(function(){
        let cartItems = storageFilter(window.localStorage.getItem("cartItems"))
        if(cartItems != null){
            setCartProductsState(
                cartItems.map(function(item,index){
                    return <CartItem image={item.image} productName={item.name}/>        
                })
            )    
        }
    },[])
    
    return(
       <div className="w-full h-auto md:h-screen flex fixed top-0 justify-end items-center bg-transparent z-30 drop-shadow-2xl">
            <div className=" w-full hidden lg:block absolute top-0  h-screen opacity-50 bg-white dark:bg:black">

            </div>
            <div className="w-5/6 sm:w-3/4 lg:w-1/3 h-5/6 md:h-[98%] flex flex-col relative bg-white dark:bg-blue-950 rounded-2xl justify-self-end">
                <div className="h-12 w-full flex justify-between px-3 pt-2"> 
                <div className="text-xl text-pink-500 h-4 w-auto font-bold text-center flex items-center">
                    <span className="flex items-center">What</span>
                    <span className="text-blue-500 flex items-center" >She</span>
                    <span className="text-purple-500 flex items-center">Wears</span>
                </div>
                    <FaWindowClose onClick={closeHandler} className="text-blue-950 dark:text-white text-2xl"/>
                </div>
                <div className="relative h-auto md:h-3/4 pb-0 box-border p-3 w-full overflow-auto">
                    {cartProductsState}                    
                </div>
                <div className="relative mb-0 md:absolute bottom-0  md:mb-1  w-full h-auto md:h-24 p-3">
                    <div className="text-gray-500 text-center text-sm font-medium">our products are highly rated by our customers</div>
                    <div className="text-gray-500 text-center text-sm font-medium">products inclusive of shipping cost upon request</div>
                    <button className=" m w-full h-12 bg-purple-950 text-white text-xl rounded-3xl">purchase</button>
                </div>
            </div>
        </div>
    )
}



export function CartItem({image,productName="open dress",details="This is the new fashion in town With origins from Italy it blends in well with any coat",price=20,}){
    const [quantity,setQuantity] = useState(1)
    
    let imageUrl = `/${image}.jpg`
    return (
        <div className="h-24 w-full flex gap-2 rounded-xl p-2 box-border bg-gray-400 dark:bg-gray-900 mb-1">
            <Image src={imageUrl} alt="awesome pic" className="h-full w-20 object-cover rounded-xl " width={10} height={10}/>
            <div className="w-[80%] h-full">
                <div className="text-black dark:text-white">{nameFilter(productName)}</div>
                <div className="line-clamp-2 text-blue-400 dark:text-blue-600 text-xs font-medium">This is the new fashion in town With origins from Italy it blends in well with any coat</div>
                <div className="w-full flex justify-between">
                    <div className="flex w-auto h-auto">
                        <div>Quantity</div>
                        <div>{quantity}</div>
                    </div>
                    <div>
                        ${price}
                    </div>
                </div>
            </div>
        </div>

    )
}