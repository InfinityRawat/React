
import {Link,Outlet} from 'react-router-dom'
export default Product=>{

        return(
            <>
                <h1>Products</h1>
                <nav>
                <ul>
                    <li><Link to='1234'>Product1234</Link></li>
                    <li><Link to='5432'>Product5423</Link></li>
                </ul>
                </nav>

                    <Outlet/>
            </>
        )
} 