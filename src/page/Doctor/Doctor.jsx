import Cover from '../../Components/Cover/Cover';
import './Doctor.css'
import banner from '../../assets/doctor/banner.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className=''>
            <Cover img={banner} title="Find Doctor"></Cover>
           <div className='grid md:grid-cols-4 gap-5 py-6'>
                {
                    doctors.map(doctor => <div key={doctor.ID} className='p-10 mx-auto'>
                        
                        <img className='' src={doctor.Photo} alt="" />
                        <div className=' bg-slate-100'>
                        <h2 className=' text-2xl font-bold p-2'>{doctor.Name}</h2>
                        <div className='flex justify-between mt-2 p-2 '>
                            <h4 className=' p-1 text-white text-base rounded-lg' style={{backgroundColor: "rgba(9, 175, 134)"}}>{doctor.department}</h4>
                            <Link to={`/doctor/${doctor.ID}`}>
                            <BsArrowUpRight className='text-3xl font-bold p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white duration-500 transition-all' style={{backgroundColor: "", border:"1px solid rgba(9, 175, 134)"}}></BsArrowUpRight>
                            </Link>
                        </div>
                        </div>
                        
                    </div>)
                }
           </div>
        </div>
    );
};

export default Doctor;