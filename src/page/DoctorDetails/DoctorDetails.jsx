import './DoctorDetails.css'
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { useLoaderData, useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import CustomModal from '../../Components/CustomModal/CustomModal';

const DoctorDetails = () => {
    const[data, setData] = useState({});
    const allDoctorDetails = useLoaderData();

    // Book an Appointment model state 
     const [isOpen , setIsOpen] = useState(false);

    let {ID} = useParams();
    // console.log(ID)
 
    useEffect(() => {
        if(allDoctorDetails){
            const singleDoctorData = allDoctorDetails.find(item => item.ID === ID);
            setData(singleDoctorData) 
        }
    })

    // console.log(data)
    return (
        <div className="ml-5 md:flex items-center h-[500px] my-10">
             <img className="md:h-[400px]" src={data.Photo} alt="" />
               <div>
             
                    <h2 className=" text-2xl font-bold mt-2">{data.Name}</h2>
                    <p className=" text-lg font-semibold">Department: <span className="" style={{color: "rgba(9, 175, 134)"}}>{data.department}</span></p>
                    <p className=" text-lg"><AiOutlineMail></AiOutlineMail> Email: {data.Email}</p>
                    <p className=" text-lg"><BsFillTelephoneFill></BsFillTelephoneFill> Phone: {data.Phone}</p>
                    <p className=" text-lg"><GrSchedules></GrSchedules> Schedules: {data.Schedules}</p>


                   <div>
                        <button className=" border-r-emerald-500 border-2 p-2 hover:bg-emerald-500 hover:transition-all hover:duration-300 hover:border-emerald-500 hover:text-white mt-2" onClick={() => setIsOpen(true)}>Book an Appointment</button>

                        {
                            isOpen && <CustomModal data={data} closeModal={setIsOpen}></CustomModal>
                            
                        }
                   </div>
                    <div className="flex justify-between mt-4 w-48">

                       <FaFacebookF className="text-2xl block cursor-pointer hover:scale-125 hover:duration-300 hover:text-green-600"></FaFacebookF>
                       <FaTwitter className=" text-2xl  block cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaTwitter>
                       <FaInstagram className=" text-2xl block  cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaInstagram>
                       <FaTelegramPlane className=" text-2xl block  cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaTelegramPlane>
                       
                    </div>
              </div>
           
        </div>
    );
};

export default DoctorDetails;