

export default function Loading(){
    return(
        <div className="text-white dark:bg-black dark:text-slate-600 w-12/12 min-h-screen overflow-x-hidden  bg-white">
            <div className="flex mb-48 h-auto w-auto ">
                {/*the wrapper with the scrolling changing text in the flex container*/}
                {/*size is for both width  height,for specifics use width with fraction*/}
                {/*for text-black you don't specify the opacity 
                The padding moves  double e.g know that p-6 is same as padding 1.5rem but p-18 doesn't work*/}
                <div className="flex z-10 animate-pulse lg:drop-shadow-none drop-shadow-sm bg-white dark:bg-black dark:text-slate-600 opacity-90 flex-col gap-y-4 px-6 md:pl-12 text-4xl md:text-7xl w-full lg:w-4/12 md:ml-16 mt-16 h-3/4 lg:h-auto text-black ">
                </div>
                
                {/*this right side is the pictorial section*/}
                <div className="w-full absolute lg:w-2/3 h-screen lg:relative">
                    <div className="w-full bg-green-700 animate-pulse lg:h-3/4 lg:w-1/2 h-screen absolute lg:top-64 lg:left-10">
                    </div>
                    <div className="hidden lg:w-1/2 lg:h-3/4 top-12 animate-[pulse_7s_ease-in-out_infinite] lg:block lg:absolute right-24">
                   </div>
                </div>
            </div>
        </div>
    )
}