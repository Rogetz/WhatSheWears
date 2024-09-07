import Image from "next/image"
import tempImage from "../../whatshewearsLogoInspiration2.PNG"
import green_dotted_dress from "../../assets/green_dotted_dress.jpg"
import beachDress from "../../assets/beach_dress.jpg"
import greener_baloon_dress from "../../assets/greener_baloon_dress.jpg"
import short_checked_dress from "../../assets/short_checked_dress.jpg"
import tight_pink_dress from "../../assets/tight_pink_dress.jpg"
import yellow_coat from "../../assets/yellow_coat.jpg"

import Link from "next/link"


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


export function CategorySkeleton(){
    return(
        <p className="text-color-white animate-pulse w-screen h-screen bg-blue-600">
            hello the category skeleton
        </p>
    )
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


export function Category({category}){
    return(
        <div> 
            <div className="h-auto w-full text-black dark:bg-black dark:text-slate-600">
                <div className="w-full h-auto px-12 flex justify-between">
                    <h1 className="text-2xl tracking-tight font-bold">Our latest {category}</h1>
                </div>
                <div className="grid w-full h-auto px-4 py-2 lg:px-12 lg:py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {products.map(function(product,index){
                    return <Link key="index" href={`/product/${product.name}`} className="w-full mb-6 h-auto flex flex-col gap-1">
                        <div className="w-full h-[20rem]">
                        <Image src={product.imagery} alt="great image" className="object-cover object-center w-full h-full" width={300} height={300}/>
                        </div>
                        <div className="flex px-4 justify-between">
                        <p className="text-gray-700 font-semibold tracking-tighter">{nameFilter(product.name)}</p>
                        <p className="dark:text-white text-black font-bold">${product.price}</p>
                        </div>
                        <div className="flex px-4 justify-between">
                            <p className="px-4 text-gray-400 font-medium">{product.category}</p>
                            <button className="rounded-lg px-4 py-2 bg-blue-600 text-white">order</button>
                        </div>
                    </Link>
                })}
                </div>

            </div>
        </div>
    )
}