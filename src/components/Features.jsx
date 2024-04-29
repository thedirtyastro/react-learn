import FeBg from '../assets/FeBg.png'
import CarouselV from './CarouselV';
import LapFe from '../assets/LapFe.png'

const Features = () => {
  return (
    <div
    className="  bg-cover  flex flex-row gap-5 py-28 text-white items-center"
    style={{ backgroundImage: `url(${FeBg})` }}>
        < img className='w-1/3' src={LapFe} alt='Laptop'/>
        <div className="w-1/2">
        <CarouselV />
      </div>
        </div>
  )
}

export default Features;