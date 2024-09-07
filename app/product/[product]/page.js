import { Product,ProductSkeleton} from "../../components/products"
import {Suspense} from "react"


export default function ProductPage({params}){
    const product = params.product
    // you ought to be receiving the name alone then you fecth from the database concerning the name
    return(
        <div className="w-screen h-screen">
            <Suspense fallback={<ProductSkeleton/>}>
                <Product productName={product}/>
            </Suspense>
        </div>
    )
}