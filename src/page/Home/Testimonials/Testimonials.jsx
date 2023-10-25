import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const[patients, setPatients] = useState([]);
    useEffect(()=> {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setPatients(data))

    })


    return (
        <div className='mt-5'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center p-4 mt-4 mb-7'> <span className='titleUnderline'>What Our <span className='ourFacilitiesSpan'>Clients Say</span></span></h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                pagination={{
                clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
               }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                        
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 70,
                    }
                    ,
                    840: {
                        slidesPerView: 4,
                        spaceBetween: 90,
                    }
      
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

               
                    {
                        patients.map(patient => 
                        <SwiperSlide className='mt-3' key={patient.id}>
                            <div className='testimonialsBox pl-8 pt-20 pr-8 pb-8 mb-8'>
                                <BiSolidQuoteAltLeft className=' text-white text-4xl absolute top-7 left-4'></BiSolidQuoteAltLeft>
                                <p className=' text-justify text-base text-slate-600'>{patient.patientsReview}</p>
                                <img className='rounded-full mx-auto my-4' src={patient.img} alt="" />
                                <h4 className=' text-2xl font-bold text-center'>{patient.name}</h4>
                                

                            </div>
                        </SwiperSlide>)
                    }
                

           </Swiper>
        </div>
    );
};

export default Testimonials;