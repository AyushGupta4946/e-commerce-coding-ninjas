/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './ProductCard.scss'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/bazarSlice';


const ProductCard = ({item}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const _id = item.title;
    const idString = (_id) =>{
        return String(_id).toLocaleLowerCase().split(" ").join(""); 
    }
    const rootId = idString(_id);
    const handleDetails = () =>{
        navigate(`/product/${rootId}`,{
            state:{
                item:item,
            }
        })
    }

  return (
    <div className='productCard'>
        
        <div className="image" onClick={handleDetails}>
            <img src={item.image} alt="" />
            {item.isNew && <p>Sale</p>}
        </div>
        <div className="details">
            <p>{item.title}</p>
            <div className='prices'>
                <span className='oldPrice'>$ {item.oldPrice}</span>
                <span className='price'>$ {item.price}</span>
            </div>
        </div>
        <div className="cart">
            <span>{item.category}</span>
            <span className='cartIcon' onClick={()=>dispatch(addToCart({
                _id : item._id,
                title : item.title,
                image : item.image,
                price : item.price,
                quantity : 1,
                description : item.description
            }))}><AiOutlineShoppingCart/></span>
        </div>
        
    </div>
  )
}

export default ProductCard