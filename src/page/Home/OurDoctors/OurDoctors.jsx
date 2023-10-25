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

            <Swiper
            slidesPerView={4}
            grid={{
            rows: 2,
            fill: "row",
            }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    grid: { rows: 1, columns: 1 },
                    
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                    grid: { rows: 1, columns: 2 },
                }
                ,
                840: {
                    slidesPerView: 3,
                    spaceBetween: 90,
                }
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
        >
            {

            }

            {
                doctors.map(doctor => 
                    <SwiperSlide key={doctor.ID} className='container h-[50vh] md:h-[60vh] lg:h-[60vh]'>
                
                    <div className='OurDoctorsBox'>
                        <img src={doctor.Photo} alt="" /> 
                    
                    <div className="info w-[100%] md:w-[300px] lg:w-[300px]">
                        <div className=''>
                          <h2 className='text-xl font-bold mb-1 text-center'>{doctor.Name}</h2>
                          <h4 className='text-lg font-bold mb-2 text-white text-center'>{doctor.Department}</h4>
                        </div>
                        <p className='text-lg mb-1'><BsFillTelephoneFill className='text-lg'></BsFillTelephoneFill> {doctor.Phone}</p>
                        <p className='text-lg mb-1'><MdEmail className='text-lg'></MdEmail> {doctor.Email}</p>
                       
                    </div>
                    </div> 
                
            </SwiperSlide>
                    
                )
            }

            
            
        </Swiper>
        </div>
    );
};

export default OurDoctors;