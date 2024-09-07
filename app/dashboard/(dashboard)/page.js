import { unstable_noStore as noStore } from "next/cache"
import {Suspense} from "react"

// so for each page it just needs to export a default function that will stand for the route.
export default async function Dashboard(){
    return(
        <div>
            <Suspense fallback={<PageSkeleton/>}>
                <PageContents/>
            </Suspense>
        </div>
    )
}

export function PageSkeleton(){
    return(
        <div>This is the loading page skeleton btw by suspense</div>
    )
}

async function PageContents(){
    const testResult = await timeWaster() 
    return(
        <div>
            this is the actual text of the dashboard that I have created
            <div>test result: {testResult}</div>
        </div>
    )
}

async function timeWaster(){
    noStore()
    await new Promise((resolve) => setTimeout(resolve,5000))
    return "hello world to the dashboard route"
}








