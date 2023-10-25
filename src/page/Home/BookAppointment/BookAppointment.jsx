import img from '../../../assets/appointment/appointment-banner.png'
import './BookAppointment.css'
import { useState } from "react";
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

 import { useForm } from "react-hook-form"

 

const BookAppointment = () => {
const { register,handleSubmit, reset ,formState: { errors },} = useForm()

 const [startDate, setStartDate] = useState(new Date());
//  console.log(startDate)

 const onSubmit = (data) =>{
   const department = data.department;
   const doctor = data.doctor;
   const patient = data.patient;
   const date =  startDate;
   const number = data.number;
   const email = data.email;

   console.log(department, doctor, patient, date, number, email);
   reset()

 } 
    return (
        <div className='mx-auto w-[100%] bookAppointmentContainer'> 
        <div className='flex items-center justify-between'>
            <div >
                <img className=' hidden lg:block lg:w-[800px] lg:mt-40' src={img} alt="" />
                </div>
                    <div className="mt-10 w-[100%]">
                    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:mt-20">
                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Department Name</span>
                                </label>
                                <input type="text" {...register("department")} placeholder="Department Name" className="input input-bordered w-[100%]" required />
                                </div>
                                    
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Doctor Name</span>
                                </label>
                                <input type="text" {...register("doctor")} placeholder="Doctor Name" className="input input-bordered w-[100%]" required />
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Patient Name</span>
                                    </label>
                                    <input type="text" {...register("patient")} placeholder="Patient Name" className="input input-bordered w-[100%]" required />
                                    
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Date</span>
                                    </label>
                                   <DatePicker className='w-[100%] p-3 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
                                    
                                </div>

                            </div>  


                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Phone Number</span>
                                    </label>
                                    <input type="number" {...register("number")} placeholder="Your Phone Number" className="input input-bordered w-[100%]" required />
                                    
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                  <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered" required /> 
                                    
                                </div>

                            </div>
                            
                            <div className="form-control mt-6">
                            <input className='formBtn lg:p-3 rounded-lg text-lg font-semibold lg:text-xl' type="submit" value="submit" />
                            </div>
                        </form>
                </div> 
            </div>
        </div>


    );
};

export default BookAppointment;