import { useState } from "react";
import { useEffect } from "react";
import {BiRightArrowAlt } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";

// Swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SingleService = () => {
    const[service, setService] = useState({});
    const allService = useLoaderData();

    let {id} = useParams();
    // console.log(ID)
 
    useEffect(() => {
        if(allService){
            const singleDoctorData = allService.find(s => s.id === id);
            setService(singleDoctorData) 
        }
    })


    // console.log(data)

    return (
        <div >
        <div className="grid md:grid-cols-3 lg:grid-cols-3 mt-10 gap-5 mx-auto">
           <div>
                <img className="" src={service.image} alt="" />
            </div> 
            <div>
                <h2 className=" text-3xl font-bold mb-4">{service.title}</h2>
                <p className=" text-lg">{service.description}</p>
            </div>
           
            <div className="md:ml-32 lg:ml-32">
                {
                  allService.map((item)=> <li className="cursor-pointer list-none text-lg" key={item.id}>
                   <BiRightArrowAlt style={{color:'rgba(9, 175, 134)'}}></BiRightArrowAlt> {item.title}
                  </li>)  
                }
            </div>
        </div>

        {/* slider start */}
        <div className="md:mt-20">
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
              allService.map(item => 
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="" />
                <h2 className=" text-xl font-bold">{item.title}</h2>
                <p className=' text-gray-700'>{item.description.slice(1, 200)}.....</p>
              </SwiperSlide>) 
            }
            
           
        </Swiper>
        </div>
        </div>
    );
};

export default SingleService;