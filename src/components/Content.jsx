import contentBg from '../assets/contentBg.png'

const Content = () => {
  return (
    <div
    className="w-full  bg-cover bg-center flex flex-col justify-center align-middle text-center gap-7 px-72 py-28 text-white"
    style={{ backgroundImage: `url(${contentBg})` }}>
    <p>
        Free Sample
    </p>
    <h2 className='text-5xl font-bold'>
        Powerful Generator and Free Figma Resources
    </h2>
    <p>
    Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
    </p>
    
    </div>
  )
}

export default Content;