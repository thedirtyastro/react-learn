import FormBg from '../assets/FormBg.png'
import FormCard from './FormCard';

const Form = () => {
  return (
    <div
      className="w-full  bg-cover bg-center flex flex-col justify-center align-middle text-center gap-7 px-72 py-28 text-white"
      style={{ backgroundImage: `url(${FormBg})` }}>
        < FormCard />
    </div>
  );
};

export default Form;
