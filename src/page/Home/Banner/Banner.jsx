import './Banner.css'

const Banner = () => {

    return (
        <div className="banner relative lg:h-[100vh] h-[50vh] z-1">
            <div className='banner-text absolute w-[100%] flex items-start justify-center'>
                <div className='lg:mt-52 mt-5'>
                    <span className='text-lg lg:text-4xl stroke-text'>A </span>
                    <span className='text-lg lg:text-4xl stroke-text'>hospital</span>
                </div>
                <div className='-mt-6'>
                    <span className='text-lg lg:text-4xl'>is no place to be sick.</span>
                </div>

                {/* figures */}
                <div className='hidden figures lg:flex gap-6 '>
                    <div className=' bg-slate-300 p-6 rounded-lg'>
                        <span className='md:text-base lg:text-4xl'>25+</span>
                        <span className='md:text-base lg:text-lg'>Years of Experience</span>
                    </div>
                    <div className=' bg-slate-300  p-6 rounded-lg'>
                    <span className='md:text-base lg:text-4xl'>140+</span>
                    <span className='md:text-base lg:text-lg'>Specialist Doctors</span>
                    </div>
                    <div className=' bg-slate-300 p-6 rounded-lg'>
                    <span className='md:text-base lg:text-4xl'>100K+</span>
                    <span className='md:text-base lg:text-lg'>Patients Recover</span>
                    </div>

                    
            </div>
            <div>
                {/* banner button  */}
                <div className='flex gap-5'>
                        <button className=' btn1'>Get Started</button>
                        <button className=' btn2'>Contact Us</button>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Banner;