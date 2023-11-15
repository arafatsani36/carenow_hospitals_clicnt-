import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cover from "../../Components/Cover/Cover";
import coverImg from '../../assets/banner/departments.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import CustomModal from "../../Components/CustomModal/CustomModal";

const Departments = () => {
    const[data, setData] = useState([]);
    // Book an Appointment model state 
    const [isOpen , setIsOpen] = useState(false);
    const  AllDepartments  = useLoaderData();
    let {department} = useParams();
   

    useEffect(() => {
        if(AllDepartments){
            const singleDepartments = AllDepartments.filter(item => item.department === department);
            setData(singleDepartments) 
        }
    },[AllDepartments, department])

    return (
        <div>
            <Cover img={coverImg} title="Departments"></Cover>
            <div className="grid md:grid-cols-3 mx-auto w-[90%] gap-8 my-8"> 
            {
                    data.map(item => 
                    <div key={item.ID} className=" mx-auto">
                        <img src={item.Photo} alt="" />

                        <div>
             
                            <h2 className=" text-2xl font-bold mt-2">{item.Name}</h2>
                            <p className=" text-lg font-semibold">Department: <span className="" style={{color: "rgba(9, 175, 134)"}}>{item.department}</span></p>
                            <p className=" text-lg"><AiOutlineMail></AiOutlineMail> Email: {item.Email}</p>
                            <p className=" text-lg"><BsFillTelephoneFill></BsFillTelephoneFill> Phone: {item.Phone}</p>
                            <p className=" text-lg"><GrSchedules></GrSchedules> Schedules: {item.Schedules}</p>

                            <div className="flex justify-between mt-4 w-48">

                                <FaFacebookF className="text-2xl block cursor-pointer hover:scale-125 hover:duration-300 hover:text-green-600"></FaFacebookF>
                                <FaTwitter className=" text-2xl  block cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaTwitter>
                                <FaInstagram className=" text-2xl block  cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaInstagram>
                                <FaTelegramPlane className=" text-2xl block  cursor-pointer ml-3 hover:scale-125 hover:duration-300 hover:text-green-600"></FaTelegramPlane>
                                
                             </div>
                         </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Departments;