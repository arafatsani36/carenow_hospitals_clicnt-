import './OurDoctors.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination} from 'swiper/modules';
import { useEffect, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const OurDoctors = () => {

    const[doctors, setDoctors] = useState([]);
    useEffect(() =>  {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    })


    return (
        <div className=' mx-auto md:w-[90%] lg:w-[90%] OurDoctors'>
            <h2 className=' text-2xl lg:text-3xl font-bold text-center p-4 my-4'><span className='titleUnderline'>Our <span className='OurDoctorsSpan'>Doctor</span></span> </h2>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    doctors.map(doctor => 
                    <div key={doctor.ID} className='container '>
                
                    <div className='OurDoctorsBox'>
                        <img src={doctor.Photo} alt="" /> 
                    
                    <div className="info w-[100%]">
                        <div className=''>
                          <h2 className='text-xl font-bold mb-1 text-center'>{doctor.Name}</h2>
                          <h4 className='text-lg font-bold mb-2 text-white text-center'>{doctor.Department}</h4>
                        </div>
                        <p className='text-lg mb-1'><BsFillTelephoneFill className='text-lg'></BsFillTelephoneFill> {doctor.Phone}</p>
                        <p className='text-lg mb-1'><MdEmail className='text-lg'></MdEmail> {doctor.Email}</p>
                       
                    </div>
                    </div> 
                
                    </div>
                    
                )
                }
        </div> 
            
       
        </div>
    );
};

export default OurDoctors;