
import loginImage from '../../assets/login and registration/login.gif'
import { Link } from "react-router-dom";
const Login = () => {


    return (
        <div >
            <h2 className='text-2xl lg:text-3xl font-bold text-center mt-4 p-4'> <span className='titleUnderline'>Login <span className='ourFacilitiesSpan'>Now</span></span></h2>
           <div className=" min-h-screen grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-6 ">
             <div>
                  <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl md:mx-auto">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p className=" text-base mt-2"> Don't have an account? <Link to='/registration' className="text-teal-500 font-bold">Registration</Link></p>
                    </form>
                 </div>
                
                </div>
           </div>
               
             
            
            </div>
    );
};

export default Login;