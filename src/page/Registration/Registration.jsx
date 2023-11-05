import img from '../../assets/doctor/review6.jpg'
import { Link } from 'react-router-dom';
import registrationImage from '../../assets/login and registration/registration.gif'
const Registration = () => {
    return (
        <div>
            <h2 className='text-2xl lg:text-3xl font-bold text-center mt-4 p-4'> <span className='titleUnderline'>Registration <span className='ourFacilitiesSpan'>Now</span></span></h2>
            <div className=" min-h-screen grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-6 ">
             <div>
                  <img src={registrationImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl md:mx-auto">
                <div className="card-body">
                    <form>
                       <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="flex items-center justify-between my-5">
                        <label className="text-slate-800 loading-xl ">
                        <div className='flex justify-center items-center'>
                        <p className='text-[16px] font-bold'>Are you a:</p>     
                            <div>
                            <select className="select w-full max-w-xs focus:outline-none text-base">
                            <option className='text-base'>Patient</option>
                            <option  className='text-base'>Doctor</option>
                            </select>
                            </div>
                        </div> 
                        </label>

                        <label className="text-slate-800 loading-xl ">
                        <div className='flex justify-center items-center'>
                        <p className='text-[16px] font-bold'>Gender:</p>     
                            <div>
                            <select className="select w-full max-w-xs focus:outline-none">
                            <option disabled selected className='text-base'>Selected</option>
                            <option className='text-base'>Male</option>
                            <option className='text-base'>Female</option>
                            <option className='text-base'>Other</option>
                            </select>
                            </div>
                        </div> 
                        </label>

                        </div>


                        <div className="flex items-center mt-5">
                        <div className='w-[60px] h-[60px] rounded-full avatar'>
                            <img src={img} alt=""  className=' w-full rounded-full'/>
                        </div>
                        <div>
                            <input type="file" name="Photo" id="customFile" accept='.jpg, .png,'
                            className='hidden'/>
                           <label htmlFor="customFile" className='bg-teal-500 text-white p-4 rounded-lg ml-5 text-base font-bold cursor-pointer'>Upload Photo</label>
                        </div>
                        </div>


                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                        </div>
                        <p className=" text-base mt-2">Already have an account? <Link to='/login' className="text-teal-500 font-bold">Login</Link></p>
                    </form>
                 </div>
                
                </div>
           </div>
        </div>
    );
};

export default Registration;