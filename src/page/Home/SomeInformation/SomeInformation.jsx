import './SomeInformation.css'
import {BsFillHeartPulseFill } from "react-icons/bs";
import {RiTestTubeFill} from "react-icons/ri";
 import {GiHealthNormal} from "react-icons/gi";
import {FaLaptopMedical} from "react-icons/fa";

const SomeInformation = () => {
    return (
        <div className='someInformation grid md:grid-cols-3 lg:grid-cols-4 p-6 items-center justify-center'>
            <div className='mt-2 md:mt-0 lg:mt-0'>
                <BsFillHeartPulseFill className='text-3xl someInformationIcon mb-2'></BsFillHeartPulseFill>
                <h4 className='text-lg font-bold text-black'>HEART RATE</h4>
                <p className='mt-2 text-base'>Progressively formulate orthogonal web services before best-of-breed systems.</p>
            </div>
            <div className='mt-4 md:mt-0 lg:mt-0'>
                <RiTestTubeFill className='text-3xl someInformationIcon mb-2'></RiTestTubeFill>
                <h4 className='text-lg font-bold'>TEST LAB</h4>
                <p className='mt-2 text-base'>Progressively formulate orthogonal web services before best-of-breed systems.</p>
            </div>
            
            <div className='mt-4 md:mt-0 lg:mt-0'>
                <GiHealthNormal className='text-3xl someInformationIcon mb-2'></GiHealthNormal>
                <h4 className='text-lg font-bold'>SYMPHTOM CHECK</h4>
                <p className='mt-2 text-base'>Progressively formulate orthogonal web services before best-of-breed systems.</p>
            </div>
            <div className='mt-4 md:mt-0 lg:mt-0'>
                <FaLaptopMedical className='text-3xl someInformationIcon mb-2'></FaLaptopMedical>
                <h4 className='text-lg font-bold'>ONLINE HELP</h4>
                <p className='mt-2 text-base'>Progressively formulate orthogonal web services before best-of-breed systems.</p>
            </div>
            
        </div>
    );
};

export default SomeInformation;