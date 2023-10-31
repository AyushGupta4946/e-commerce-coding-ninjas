import { useSelector, useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { decreaseQty, deleteItem, increamentQty, resetCart } from "../../redux/bazarSlice";
import {Link} from 'react-router-dom'
import "./CartItem.scss";

const CartItem = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.bazar.productData);
   

  return (
    <div className="cartItem">
      <div className="heading">
        <h2>Items</h2>
      </div>
      <div className="items">
        {productData.map((item) => (
          <div key={item._id} className="itemContainer">
            <div>
              <MdOutlineClose  onClick={()=>dispatch(deleteItem(item._id))}/>
              <img src={item.image} alt="" />
            </div>
            <div className="box">

            <h2>{item.title}</h2>
            </div>
            <div>

            <p>$ {item.price}</p>
            </div>
            <div className="quantity">
              <button onClick={()=>dispatch(
                decreaseQty({
                    _id: item._id,
                    quantity:item.quantity
                })
              )}>-</button>
              {item.quantity}
              <button onClick={()=>dispatch(
                increamentQty({
                    _id: item._id,
                    quantity:item.quantity
                })
              )}>+</button>
            </div>
            <div>

            <p>$ {item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</button>

      <Link to="/"><span>Continue Shopping</span></Link>
    </div>
  );
};

export default CartItem;
