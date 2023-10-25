import './CustomModal.css'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

const CustomModal = ({data, closeModal}) => {

 // date picker 
 const [startDate, setStartDate] = useState(new Date());


 const {register, handleSubmit,formState: { errors }, } = useForm()
   
 const onSubmit = (data) => console.log(data)



    return (
        <div className='modalBackground '>
            <div className="modalContainer md:w-[50%]">

                <div className="closeBtn mb-3 text-right">
                  <button onClick={() => closeModal(false)}    className="btn btn-sm btn-circle btn-ghost right-3 top-3 cursor-pointer text-2xl text-emerald-600">✕</button>
                </div>
                

                <form onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}

                                <input defaultValue={data.department} {...register("department")} className="input input-bordered w-[100%] mb-2"/>
                                <input defaultValue={data.Name} {...register("doctor")} className="input input-bordered w-[100%] mb-2"/>
                                <input type="text" {...register("patient")}  placeholder="Patient Name" className="input input-bordered w-[100%] mb-2"/>       
                                <DatePicker className='w-[100%] input input-bordered p-3 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
                                
                                <input type="number" {...register("phone")} placeholder="Your Phone Number" className="input input-bordered w-[100%] mb-2"/>
                                <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered w-[100%] mb-2"/>
                                <input className='formBtn lg:p-2 rounded-lg text-lg font-semibold lg:text-xl w-52 mx-auto flex justify-center' type="submit" value="submit"/>
                </form>







                            
            </div>
        </div>
    );
};

export default CustomModal;