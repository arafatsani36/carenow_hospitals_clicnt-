
import './MyProfile.css';
import img from '../../assets/demoImage/demo.jpg'
import doctor1 from "../../assets/doctor/doctor1.png"
import doctor2 from "../../assets/doctor/doctor3.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const MyProfile = () => {
    // const [tab, setTab] = useState('bookings')
    return (
        <div className=' w-[70%] mx-auto mt-10'>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='pb-[50px] px-[30px] rounded-md'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[100px] h-[100px] rounded-full cursor-pointer myProfile-image'>
                           <img src={img} alt="" className='w-full h-full rounded-full'/>
                        </div>
                    </div>

                    <div className=' text-center'>
                    <h2 className='text-lg font-bold mt-4'>Asif Hossain</h2>
                        <p className='text-base font-semibold'>asif123012@gmail.com</p>
                        <p className='text-base font-semibold'>Blood: A+</p>
                        <p className='text-base font-semibold'>Gender: Male</p> 
                        <p></p>
                    </div>
                </div>
                


                <div className='md:col-span-2 md:px-[30px]'>
                    {/* <div className='fex gap-4'>
                        <button className='p-2 mr-5 myProfileBtn w-[20%]'>My Booking</button>
                        <button className='p-2 myProfileBtn w-[20%]'>Setting</button>
                    </div> */}
                    
                     <h2 className=' text-2xl  text-center'>My Booking</h2>
                    <div className='grid md:grid-cols-3 gap-5 mt-5'>
                        <div>
                            <img className='w-[200px]' src={doctor1} alt="" />
                            <div className='bg-slate-100'>
                                <h2 className=' text-2xl font-bold p-2'>Dr. John Smith</h2>
                                <div className='flex justify-between mt-2 p-2 bg-slate-100'>
                                <h4 className=' p-1 text-white text-base rounded-lg' style={{backgroundColor: "rgba(9, 175, 134)"}}>Cardiology</h4>
                                <Link to={''}>
                                <FaArrowRight  className='text-3xl  p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white duration-500 transition-all' style={{backgroundColor: "", border:"1px solid rgba(9, 175, 134)"}}></FaArrowRight>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className='w-[200px]' src={doctor2} alt="" />
                            <div className='bg-slate-100'>
                                <h2 className=' text-2xl font-bold p-2'>Dr. John Smith</h2>
                                <div className='flex justify-between mt-2 p-2 bg-slate-100'>
                                <h4 className=' p-1 text-white text-base rounded-lg' style={{backgroundColor: "rgba(9, 175, 134)"}}>Orthopedics</h4>
                                <Link to={''}>
                                <FaArrowRight  className='text-3xl  p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white duration-500 transition-all' style={{backgroundColor: "", border:"1px solid rgba(9, 175, 134)"}}></FaArrowRight>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='w-[200px]' src={doctor1} alt="" />
                            <div className='bg-slate-100'>
                                <h2 className=' text-2xl font-bold p-2'>Dr. John Smith</h2>
                                <div className='flex justify-between mt-2 p-2 bg-slate-100'>
                                <h4 className=' p-1 text-white text-base rounded-lg' style={{backgroundColor: "rgba(9, 175, 134)"}}>Cardiology</h4>
                                <Link to={''}>
                                <FaArrowRight  className='text-3xl  p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white duration-500 transition-all' style={{backgroundColor: "", border:"1px solid rgba(9, 175, 134)"}}></FaArrowRight>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className='w-[200px]' src={doctor1} alt="" />
                            <div className='bg-slate-100'>
                                <h2 className=' text-2xl font-bold p-2'>Dr. John Smith</h2>
                                <div className='flex justify-between mt-2 p-2 bg-slate-100'>
                                <h4 className=' p-1 text-white text-base rounded-lg' style={{backgroundColor: "rgba(9, 175, 134)"}}>Ophthalmology</h4>
                                <Link to={''}>
                                <FaArrowRight  className='text-3xl  p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white duration-500 transition-all' style={{backgroundColor: "", border:"1px solid rgba(9, 175, 134)"}}></FaArrowRight>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyProfile;