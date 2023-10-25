
import './OurFacilities.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Grid, Pagination, Autoplay} from 'swiper/modules';

import img1 from '../../../assets/banner/banner.jpg'
import { FaAmbulance, FaProcedures, FaToolbox, FaUserNurse} from 'react-icons/fa';
import {MdBloodtype, MdOutlineFoodBank, MdOutlineLocalPharmacy} from 'react-icons/md';
import { PiHandsPrayingBold, PiStethoscopeThin} from 'react-icons/pi';


const OurFacilities = () => {
    return (
        <div className=' mx-auto w-[90%] OurFacilitiesContainer'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center p-4 my-4'> <span className='titleUnderline'>Our <span className='ourFacilitiesSpan'>Facilities</span></span></h2>

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
            modules={[Grid, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                
                <div className='OurFacilities'>
                  <FaAmbulance className='text-center mx-auto text-3xl mb-2'></FaAmbulance>
                  <h2 className=' text-xl font-bold mb-2'>24hr Ambulance</h2>
                  <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
                </div> 
                
            </SwiperSlide>
            <SwiperSlide>
                <div className='OurFacilities'>
                  <FaUserNurse className='text-center mx-auto text-3xl mb-2'></FaUserNurse>
                  <h2 className=' text-xl font-bold mb-2'>Special Nurse</h2>
                  <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className='OurFacilities'>
                   <PiStethoscopeThin className='text-center mx-auto text-3xl mb-2'></PiStethoscopeThin> 
                  <h2  className=' text-xl font-bold mb-2'>Special Doctor</h2>
                  <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <MdOutlineFoodBank className='text-center mx-auto text-3xl mb-2'></MdOutlineFoodBank>
                <h2 className=' text-xl font-bold mb-2'>Food & Dietary</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <FaProcedures className='text-center mx-auto text-3xl mb-2'></FaProcedures>
                <h2 className=' text-xl font-bold mb-2'>Operation Theatre</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <FaToolbox className='text-center mx-auto text-3xl mb-2'></FaToolbox>
                <h2 className=' text-xl font-bold mb-2'>Outdoor Checkup</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <PiStethoscopeThin className='text-center mx-auto text-3xl mb-2'></PiStethoscopeThin>
                <h2 className=' text-xl font-bold mb-2'>Cancer Service</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <MdBloodtype className='text-center mx-auto text-3xl mb-2'></MdBloodtype>
                <h2 className=' text-xl font-bold mb-2'>Blood Test</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <MdOutlineLocalPharmacy className='text-center mx-auto text-3xl mb-2'></MdOutlineLocalPharmacy>
                <h2 className=' text-xl font-bold mb-2'>Pharmacy</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='OurFacilities'>
                <PiHandsPrayingBold className='text-center mx-auto text-3xl mb-2'></PiHandsPrayingBold>
                <h2 className=' text-xl font-bold mb-2'>Pharmacy</h2>
                <p className=' text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit ad vero blanditiis commodi in perspiciatis sequi vitae sed! Consequuntur!</p>
              </div>
            </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OurFacilities;