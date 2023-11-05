import './Header.css';
import { Link } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import logo from '../../../assets/logo/logo.png'
import { useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';


const Header = () => {
    const [open , setOpen] = useState(false);

    const[doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data =>{
            const uniqueData = [];
            const seen = new Set();

            data.forEach((item) => {
                // Use a unique department
                if (!seen.has(item.department)) {
                  seen.add(item.department);
                  uniqueData.push(item);
                }
              });


            setDoctor(uniqueData)
        })

    }, [])




    return (
        <div>
            <div className='header'>
                <div className='hidden lg:block lg:flex lg:justify-between lg:items-center w-[90%] mx-auto lg:mt-4 lg:p-2'>
                    <div>
                        <h4 className='text-base font-semibold text-black'>24 hours emergency & ambulance Service: <span>+321 789 01 201</span></h4>
                    </div>
                    <div>
                        <p className='text-base text-black'>Send Message help@example.com</p>
                    </div>
                    <div>
                        <input className='border-green-700 focus:outline-none placeholder-gray-600 rounded-lg' type="search" name="" id="" placeholder='Search Doctor....'/>
                    </div>
                </div>
            </div>


            
                <nav className="flex justify-between items-center  w-[90%] mx-auto p-3 lg:p-0">
                    <div className='flex'>
                        <img className='w-9 h-9 mt-2' src={logo} alt="" />
                        <h1 className='logo lg:text-2xl font-bold'><span>Carenow</span> hospitals</h1>
                    </div>

                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                        {open ? <CgMenuMotion className=" text-3xl cursor-pointer" ></CgMenuMotion>:<AiOutlineCloseCircle className=" text-3xl cursor-pointer"></AiOutlineCloseCircle>}
                    </div>

                

                    <ul className={`nav md:flex md:items-center md:pb-10 pb-12 absolute md:static bg-white md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
                        <li>
                            <Link className='active' to='/'>Home</Link>
                        </li>

                        <li className="dropdown">
                            <Link to=''>
                            <label tabIndex={0} >Departments <MdArrowDropDown></MdArrowDropDown></label>
                            </Link>
                            {/* dropdwon  */}
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-96 bg-white">
                            {doctor.map((item, index) => <li key={index} className='p-4 w-full'><Link to={`/departments/${item.department}`}>{item.department}</Link></li>)}
                            </ul>
                        </li>

                            


                        <li>
                            <Link to='/doctor'>Doctor</Link>
                        </li>





                        <li>
                            <Link to='/service'>Services</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        
                        <div className='lg:items-center'>
                            <button className="lg:ml-[10vw] text-lg"><Link to='login'>login</Link></button>
                        </div>
                        
                        </ul>  
                </nav>
                </div>


        
    );
};

export default Header;