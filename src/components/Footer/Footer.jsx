import {AiOutlineHeart} from 'react-icons/ai'
import './Footer.scss'



const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Link</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compares</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus reiciendis quia in, porro suscipit! Ab doloribus ullam at harum fugiat, officiis magnam in temporibus!</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto nobis harum sed debitis voluptatibus, similique animi, exercitationem veritatis autem illum error, fugit earum aliquam?</span>
            </div>
        </div>
        <div className="bottom">
            Made with <AiOutlineHeart/> from Ayush.
        </div>
    </div>
  )
}

export default Footer