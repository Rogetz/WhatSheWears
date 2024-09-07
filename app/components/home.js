import Image from "next/image"
import tempImage from "../../whatshewearsLogoInspiration2.PNG"
import green_dotted_dress from "../../assets/green_dotted_dress.jpg"
import beachDress from "../../assets/beach_dress.jpg"
import greener_baloon_dress from "../../assets/greener_baloon_dress.jpg"
import short_checked_dress from "../../assets/short_checked_dress.jpg"
import tight_pink_dress from "../../assets/tight_pink_dress.jpg"
import yellow_coat from "../../assets/yellow_coat.jpg"
import Link from "next/link"
import {FaArrowCircleRight} from "react-icons/fa"


function nameFilter(name){
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

export function ActualHomeSkeleton(){
    return(
        <p className="text-color-white animate-pulse w-screen h-screen ">
            hello the skeleton
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

export function ActualHome(){

    return(
        <div className="text-white dark:bg-black dark:text-slate-600 w-full min-h-screen overflow-x-hidden  bg-white">
            <div className="flex relative mb-12 lg:mb-48 h-[30rem] overflow-hidden lg:overflow-visible md:h-auto w-full md:w-auto box-border ">
                {/*the wrapper with the scrolling changing text in the flex container*/}
                {/*size is for both width  height,for specifics use width with fraction*/}
                {/*for text-black you don't specify the opacity 
                The padding moves  double e.g know that p-6 is same as padding 1.5rem but p-18 doesn't work*/}
                <div className="flex self-end md:self-start  left-10 sm:left-0  sm:relative z-10 lg:drop-shadow-none drop-shadow-sm bg-white dark:bg-black dark:text-slate-600 opacity-90 flex-col gap-y-4 px-6 md:pl-0 lg:pl-12 text-4xl md:text-7xl w-full md:w-5/6 lg:w-4/12 md:ml-0 lg:ml-16 mt-16 h-fit lg:h-auto text-black ">
                    <p className=" dark:text-white">Drip in Thrift</p> 
                    <div className="flex flex-row text-2xl md:text-5xl relative w-64 h-8 md:h-12 overflow-hidden ">
                        <span className="text-blue-950 opacity-0 w-64 absolute animate-[pulse_5s_ease-in-out_infinite]">AnyWear</span>
                        <span className="text-purple-950 opacity-0 w-64 absolute animate-[pulse_5s_ease-in-out_infinite_8s]">AnyWhere</span>
                    </div>
                    <p className="text-black hidden text-sm md:text-2xl sm:block leading-relaxe dark:text-slate-600">Find the perfect thrift for your drip at an affordable price.
                    </p>
                    <div className="w-full hidden  sm:flex h-auto box-border rounded-lg bg-blue-700">
                    <button className="text-sm md:text-xl bg-blue-500 text-white w-1/3 border-r-2 px-3 py-2 transition-all duration-200 hover:bg-purple-500">Dress</button>
                    <button className="text-sm md:text-xl bg-blue-500 text-white w-1/3 border-r-2 px-3 py-2 transition-all duration-200 hover:bg-purple-500">Blouse</button>
                    <button className="text-sm md:text-xl bg-blue-500 text-white w-1/3 border-r-2 px-3 py-2 transition-all duration-200 hover:bg-purple-500">Skirts</button>
                    </div>
                </div>
                
                {/*this right side is the pictorial section*/}
                <div className="w-full absolute lg:w-2/3 h-full lg:h-screen lg:relative">
                    <div className="w-full left-0 bg-green-700 lg:h-3/4 lg:w-1/2 h-full absolute lg:top-64 lg:left-10">
                        <Image src={tight_pink_dress} alt="great image" className="object-cover w-full h-full object-center" width={900} height={900} priority={true}/>
                    </div>
                    <div className="hidden lg:w-1/2 lg:h-3/4 top-12 lg:block lg:absolute right-24">
                    <Image src={yellow_coat} alt="great image" className="object-cover w-full h-full object-center" width={900} height={900} priority={true}/>
                   </div>
                </div>
            </div>
            <div className="h-auto p-10 w-full text-black dark:bg-black dark:text-slate-600 ">
                <div className="w-full h-auto px-0 lg:px-12 flex justify-between">
                    <h1 className="text-xl md:text-2xl tracking-tight font-bold dark:text-slate-600 flex gap-2"><span className="hidden md:block">Our</span> latest <span className="hidden md:block">products</span></h1>
                    <Link href="product/all" className="text-xl md:text-2xl text-blue-700 dark:text-slate-600 flex gap-2"><span className="hidden md:block">explore</span> more...</Link>
                </div>
                <div className="grid w-full h-auto py-2 lg:px-12 lg:py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {products.map(function(product,index){
                    return (
                    <Link key="index" href={`/product/${product.name}`} className="w-full mb-6 h-auto flex flex-col gap-1">
                        <div className="w-full h-[25rem]">
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

                    )
                })}
                </div>

            </div>
        </div>
    )
}