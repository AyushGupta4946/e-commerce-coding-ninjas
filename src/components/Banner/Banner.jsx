import './Banner.scss'
import {useState} from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'



const Banner = () => {

    const data = [

        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1300",
        "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1300",
        "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1300"
    ]

    const [currentBanner, setCurrentBanner] = useState(0)

    const prevBanner = () => {
        setCurrentBanner(currentBanner === 0 ? 2 : (prev) => prev - 1)
    }

    const nextBanner = () => {
        setCurrentBanner(currentBanner === 2 ? 0 : (prev) => prev + 1)
    }



  return (
    <div className='banner'>
        <div className="container" style={{transform:`translateX(-${currentBanner * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevBanner}>
                <AiOutlineArrowLeft/>
            </div>
            <div className="icon" onClick={nextBanner}>
                <AiOutlineArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default Banner