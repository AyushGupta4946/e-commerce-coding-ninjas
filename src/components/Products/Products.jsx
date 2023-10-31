/* eslint-disable react/prop-types */
import ProductCard from '../ProductCard/ProductCard'
import './Products.scss'


const Products = ({products}) => {
  return (
    <div className='products'>
        <div className="content">
            <h1>SHOPPING EVERYDAY</h1>
            <span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit doloremque fuga cum ex atque quod! Perspiciatis sint corrupti reiciendis placeat nobis, nemo repudiandae architecto a natus mollitia ullam necessitatibus!</p>
        </div>
        <div className="productData">
            {products.map((item) =>(
                <ProductCard key={item._id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Products