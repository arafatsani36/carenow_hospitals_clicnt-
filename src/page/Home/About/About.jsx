import { FaHospitalAlt } from 'react-icons/fa';
import './About.css'
import { BsHeartPulse } from 'react-icons/bs';
import { ImMan } from 'react-icons/im';
import { PiStethoscopeThin } from 'react-icons/pi';
import CountUp from 'react-countup';
const About = () => {
    return (
        
        <div className='grid md:grid-cols-3 lg:grid-cols-4 mt-4  p-4 about'>
           
            <div className='flex items-center justify-center'>
                <FaHospitalAlt className=' text-4xl'></FaHospitalAlt>
                <div className='ml-2'>
                    <h2 className=' text-2xl font-bold text-white'><CountUp end={126} start={1} delay='' suffix='+'/></h2>
                    <p className=' text-lg text-black'>Hospital Rooms</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <PiStethoscopeThin className=' text-4xl'></PiStethoscopeThin>
                <div className='ml-2'>
                    <h2 className=' text-2xl font-bold text-white'><CountUp end={510} start={1} delay='' suffix='+'/></h2>
                    <p className=' text-lg text-black'>Doctors Medals</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <BsHeartPulse className=' text-4xl'></BsHeartPulse>
                <div className='ml-2'>
                    <h2 className=' text-2xl font-bold text-white'><CountUp end={100} start={1} delay='' suffix='k+'/></h2>
                    <p className=' text-lg text-black'>Patients Recover</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <ImMan className=' text-4xl'></ImMan>
                <div>
                    <h2 className=' text-2xl font-bold text-white'><CountUp end={510} start={1} delay='' suffix='+'/></h2>
                    <p className=' text-lg text-black'>Qualified Staff</p>
                </div>
            </div>
        
           
           
        </div>
      
    );
};

export default About;