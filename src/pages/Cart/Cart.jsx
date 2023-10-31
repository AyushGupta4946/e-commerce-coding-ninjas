import { useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import './Cart.scss'
import CartItem from '../../components/CartItem/CartItem'


const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const [total, setTotal] = useState("")
  useEffect(()=>{
      let price = 0;
      productData.map((item)=>{
          price += item.price * item.quantity
          return price
      })
      setTotal(price.toFixed());
  },[productData])


  return (
    <div className='cartContainer'>
      <h1>My Cart</h1>
      <span></span>
      <div className='cartContent'>
        <div className="left">
        <CartItem/>
        </div>
        <div className="right">
          <div className="rightContent">
            <h2>Cart Total</h2>
            <div className='total'>
              <p>Subtotal:</p>
              <p className='price'>$ {total}.00</p>
            </div>
            <div className="shipping">
            <p>Shipping:</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, numquam.</p>
            </div>
            
          </div>

          <div className='finalPrice'>
            <p>Total</p>
            <p>$ {total}.00</p>
          </div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart