import './Product.scss'
import {useEffect, useState} from 'react'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import {FaBalanceScale} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/bazarSlice'

const Product = () => {

    const dispatch = useDispatch()

    const [details, setDetails] = useState({})

    const location = useLocation();
    useEffect(() =>{
      setDetails(location.state.item)
    },[])

    const [quantity, setQuantity] = useState(1)
  
    

  return (
<div className="product">
      <div className="left">
        <div className="images">
          <img src={details.image} alt="" />
          <img src={details.image} alt="" />
        </div>
        <div className="mainImg">
          <img src={details.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{details.title}</h1>
        <span className='price'>${details.price}</span>
        <p>{details.description}</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          _id:details._id,
          title : details.title,
          image : details.image,
          price : details.price,
          quantity : quantity,
          description:details.description
        }))}>
          <AiOutlineShoppingCart/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <AiOutlineHeart/> ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScale/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product-type : T-Shirt</span>
          <span>Tags : Mens, Top T-Shirt</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>  )
}

export default Product