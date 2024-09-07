import {Suspense} from "react"
import { Category,CategorySkeleton } from "../../components/category"

export default function CategoryPage({params}){
    const category = params.category
    return(
        <div>
            <Suspense fallback={<CategorySkeleton/>}>
                <Category category={category}/>
            </Suspense>
        </div>
    )
}