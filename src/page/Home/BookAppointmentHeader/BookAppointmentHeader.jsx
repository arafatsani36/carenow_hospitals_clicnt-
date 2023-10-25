import './BookAppointmentHeader.css'

const BookAppointmentHeader = () => {
    return (
        <div className="w-[100%] mx-auto absolute lg:mt-[-20px]">
            <div className="lg:w-[80%] mx-auto bookAppointment  flex justify-between items-center md:p-3 lg:p-5">
              <h2 className=" text-center font-bold lg:text-2xl bookAppointmentTitle">Your one-stop for <span className='span'>CareNow Hospitals</span></h2>
              <button className='bookAppointmentBtn lg:text-lg lg:font-bold my-2 lg:p-3'>Book an Appointment </button>
            </div>
              
        </div>
    );
};

export default BookAppointmentHeader;