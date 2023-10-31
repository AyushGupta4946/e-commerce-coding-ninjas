import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import {useLoaderData} from 'react-router-dom'
import './Home.scss'
import { useEffect, useState } from 'react'



const Home = () => {

  const [products, setProducts] = useState([])
  const data = useLoaderData();
  useEffect(() =>{
    setProducts(data.data);
  },[data])
  return (
    <div className='home'>
        <Banner/>
        <Products products={products}/>
    </div>
  )
}

export default Home