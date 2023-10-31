import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbar.scss'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Navbar = () => {

    const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <Link to="/">
            <div className="left">
                <h1>Bazaar</h1>
            </div>
            </Link>
            <div className="center">
            <div className="item">Home</div>
                <div className="item">Page</div>
                <div className="item">Blog</div>
                <div className="item">Element</div>
            </div>
            <div className="right">
                <div className="iconsDiv">
                    <AiOutlineHeart/>
                    <Link to="/login"><AiOutlineUser/></Link>
                    <Link to="/cart">
                    <div className="cartIcon"><AiOutlineShoppingCart/><span>{productData.length}</span></div>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar