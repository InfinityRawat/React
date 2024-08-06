
import {useParams} from 'react-router-dom'

export default ProductDetails=>{

    const {id} = useParams();
    return(<>
               <h1>Product Details page for {id}</h1>
    </>)
        
}