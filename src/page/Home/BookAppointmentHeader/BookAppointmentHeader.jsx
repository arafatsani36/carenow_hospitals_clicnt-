import './BookAppointmentHeader.css'
import { FaHeartPulse } from "react-icons/fa6";

const BookAppointmentHeader = () => {
    return (
        <div className="w-[100%] mx-auto absolute lg:mt-[-10px] md:mt-[-40px]">
            <div className="lg:w-[80%] mx-auto bookAppointment  flex justify-between items-center md:p-3 lg:p-5">
              <h2 className="ml-[5px] md:ml-[0px] lg:ml-[0px] md:text-center lg:text-center font-bold lg:text-2xl bookAppointmentTitle">Your one-stop for <span className='span'>CareNow Hospitals</span></h2>

                <button className='heartBtn hidden md:block lg:block'><FaHeartPulse /></button>

              <button className='mr-[10px] md:mr-[0px] lg:mr-[0px] bookAppointmentBtn lg:text-lg lg:font-bold my-2 md:p-3 lg:p-3'>Book an Appointment </button>
            </div>
              
        </div>
    );
};

export default BookAppointmentHeader;