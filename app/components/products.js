"use client"

import Image from "next/image"
import tempImage from "../../whatshewearsLogoInspiration2.PNG"
import green_dotted_dress from "../../assets/green_dotted_dress.jpg"
import beachDress from "../../assets/beach_dress.jpg"
import greener_baloon_dress from "../../assets/greener_baloon_dress.jpg"
import short_checked_dress from "../../assets/short_checked_dress.jpg"
import tight_pink_dress from "../../assets/tight_pink_dress.jpg"
import yellow_coat from "../../assets/yellow_coat.jpg"

import Link from "next/link"
import {FaStar, FaTruck} from "react-icons/fa"
import {useState,useEffect} from "react"


export function nameFilter(name){
    let finalName = name
    if(name.indexOf("_") != -1){
        let arrName = name.split("_")
        finalName = arrName.join(" ")
    }
    else{
        let arrName = name.split("-")
        finalName = arrName.join(" ")
    }
    return finalName
}

export function ProductSkeleton(){
    return(
        <div className="w-screen flex overflow-hidden gap-3  h-4/5 px-10 py-5">
            {/*map this from the imagery array found*/}
            <div className="w-1/5 h-full overflow-y-auto flex flex-col gap-y-4"> 
                    // use the v4 for the keys later on.
                    <div  className="w-full h-48 bg-gray-700 rounded-lg animate-pulse" >
                    </div>
                    <div  className="w-full h-48 bg-gray-700 rounded-lg animate-pulse" >
                    </div>
                    <div  className="w-full h-48 bg-gray-700 rounded-lg animate-pulse" >
                    </div>
            </div>
            <div className="w-2/5 h-full bg-gray-700 rounded-lg relative animate-pulse">
            </div>
            <div className=" flex flex-col w-2/5 h-full gap-2 bg-gray-700 rounded-lg animate-pulse">
            </div>
        </div>

    )
}

let products = [
    {
        name: "yellow_coat",
        price: 5,
        category: "dress",
        imagery: [yellow_coat,tight_pink_dress,short_checked_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."        
    },
    {
        name: "tight_pink_dress",
        price: 10,
        category: "dress",
        imagery: [tight_pink_dress,greener_baloon_dress,short_checked_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."
    },
    {
        name: "short_checked_dress",
        price: 15,
        category: "dress",
        imagery: [short_checked_dress,tight_pink_dress,greener_baloon_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."
    },
    {
        name: "greener_baloon_dress",
        price: 25,
        category: "dress",
        imagery: [greener_baloon_dress,green_dotted_dress,tight_pink_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."
    },
    {
        name: "beachDress",
        price: 35,
        category: "dress",
        imagery: [beachDress,yellow_coat,greener_baloon_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."
    },
    {
        name: "green_dotted_dress",
        price: 30,
        category: "dress",
        imagery: [green_dotted_dress,greener_baloon_dress,tight_pink_dress],
        description: "Top fashion open dress that exudes natural beauty. Imported from Italy and best suited for beaches and sunbathing."
    },
]


function productFilter(productName){
    const productsUnfiltered = products.filter(function(product){
        if(product.name = productName){
            return product
        }
    })
    const actualProduct = productsUnfiltered[0]
    return actualProduct
}


export function Product({productName}){
    const [bigImage,setBigImage] = useState(productFilter(productName).imagery[0])
    
    const imageHandler = function({image}){
        // worked perfectly.
        setBigImage(image)
    }
    
    const addToCart = function(item,image){
        // remove  this when finally using it for official use
        window.localStorage.clear()
        let items = window.localStorage.getItem("cartItems")
        let finalItem = `{
            "image": "${item}",
            "name": "${item}"
        }`
        /*the intial item that I disbanded
        let finalItem = `{
            "image": "${image}",
            "name": "${item}"
        }`
        */
        if(items != null){
            finalItem = `${items}-${finalItem}`
        }
        return window.localStorage.setItem("cartItems",finalItem)    
    }
    return(
        <div className="w-screen flex flex-col md:flex-row overflow-hidden gap-3 min-h-screen  md:h-4/5 px-10 py-5">
            {/*map this from the imagery array found*/}
            <div className="w-full md:w-1/6 h-24 md:h-96 p-1 overflow-y-auto flex flex-row gap-x-4 md:flex-col gap-y-4"> 
                {productFilter(productName).imagery.map(function(image){
                    return  <div className="w-1/4 md:w-full h-full md:h-28 bg-gray-700 rounded-lg" >
                        {/*call the method inside the onclick function and not directly*/}
                            <Image priority={true} onClick={(e) => imageHandler({image:image})} src={image} alt="image alternate" className="w-full cursor-pointer h-full object-cover object-center rounded-lg" width={500} height={500}/>
                    </div>
                })}
            </div>
            <div className="w-5/6 md:w-2/5 h-full bg-gray-700 rounded-lg relative">
                <Image priority={true} src={bigImage} alt="image alternate" className="w-full h-full object-cover object-center" width={200} height={200}/>
                <div className="bg-red-700 text-white px-4 py-2 absolute top-0 left-0 rounded-sm">New</div>
            </div>
            <div className=" flex flex-col w-full md:w-2/5 h-auto md:h-full gap-2">
                <p className="text-gray-700 font-semibold">{productFilter(productName).category}</p>
                <p className="text-black font-bold text-2xl dark:text-white">{nameFilter(productFilter(productName).name)}</p>
                <button className="w-fit px-4 cursor-none py-2 rounded-lg bg-blue-700 flex gap-2 items-center"><span className="text-xl text-white h-full">4.5</span><FaStar className="text-xl text-yellow-200 h-full animate-spin"/><FaStar className="text-xl text-yellow-200 h-full animate-spin"/><FaStar className="text-xl text-yellow-200 h-full animate-spin"/><FaStar className="text-xl text-yellow-200 h-full animate-spin"/></button>
                <div className="flex gap-10">
                    <p>${productFilter(productName).price}</p>
                    <p  className="text-red-500 line-through">${productFilter(productName).price*1.5}</p>
                </div>
                <p className="text-md text-gray-700 font-semibold tracking-wide">Inclusive of VAT </p>
                <p className="text-md text-gray-700 font-semibold tracking-wide flex gap-x-2"><FaTruck className="text-xl"/>indoor delivery available</p>
                <div className="flex gap-x-10">
                <button className="px-4 py-2 rounded-lg bg-blue-700 flex gap-2 items-center text-white" onClick={(e) => {addToCart(productFilter(productName).name,bigImage)}} >add to cart</button>
                <button className="px-4 py-2 rounded-lg bg-blue-700 flex gap-2 items-center text-white">check out</button>
                </div>
                <p className="text-xl mb-10 md:mb-0 text-gray-500 tracking-wider ">{productFilter(productName).description}</p>
            </div>
        </div>
    )
}

