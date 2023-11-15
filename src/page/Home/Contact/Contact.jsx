import { FaHospitalAlt, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css'
import { MdOutlineEmail} from 'react-icons/md';

const Contact = () => {
    return (
        <div className=''>
             <h2 className='text-2xl lg:text-3xl font-bold text-center p-4 mt-4 mb-7'> <span className='titleUnderline'>Contact<span className='ourFacilitiesSpan'> Us</span></span></h2>
             <div className='contact p-6'>
                <div className='w-[90%] grid mx-auto md:grid-cols-2 items-center justify-center'>

                    {/* info  start*/}
                        <div className='pt-5'>
                            <div className='flex items-center mb-4'>
                                <div className='mr-5'>
                                    <FaHospitalAlt className='text-2xl'/>
                                </div>
                                <div>
                                    <h2 className='text-lg font-bold'>Address</h2>
                                    <p className='text-base font-semibold'>3380 Jones Street</p>
                                    <p className='text-base font-semibold'>Bridgeport, USA</p>
                                </div>
                            </div>

                            <div className='flex items-center mb-4'>
                                <div className='mr-5'>
                                    <FaPhoneAlt className='text-2xl'/> 
                                </div>
                                <div>
                                    <h2 className='text-lg font-bold'>Phone</h2>
                                    <p className='text-base font-semibold'>+1  817-516-74**</p>
                                </div>
                            </div>

                            <div className='flex items-center mb-4'>
                                <div>
                                    <MdOutlineEmail className='text-2xl'/>
                                </div>
                                <div className='ml-5'>
                                    <h2 className='text-lg font-bold'>Email</h2>
                                    <p className='text-base font-semibold'>opal.bergnaum@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    {/* info  end*/}

                    {/* massage start */}
                         
                        <div className="hero">
                                
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                                <form className="card-body">
                                    <h2 className=' font-bold text-xl'>Send Massage</h2>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name*</span>
                                    </label>
                                    <input type="text" placeholder="Full Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Massage*</span>
                                    </label>
                                      <textarea placeholder="massage" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                                    </div>

                                    <div className="form-control mt-6">
                                    
                                    <button className='flex  items-center justify-center mr-[10px] md:mr-[0px] lg:mr-[0px] bookAppointmentBtn lg:text-lg lg:font-bold my-2 md:p-3 lg:p-3'>Send
                                    </button>
                                    </div>
                                </form>
                                </div>

                        </div>
                    {/* massage emd */}
                </div>
            </div>
        </div>
    );
};

export default Contact;