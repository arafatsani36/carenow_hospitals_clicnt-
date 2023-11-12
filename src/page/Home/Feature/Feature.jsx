import './Feature.css';

import img from '../../../assets/doctor/feature.gif'

const Feature = () => {
    return (
        <div className='flex items-center justify-between flex-col lg:flex-row w-[90%] mx-auto feature mt-8'>
           <div>
                <h2 className='text-4xl font-bold mb-4'>Get Virtual Treatmeant</h2>
                <ul>
                    <li className='text-lg mb-2'>1. Schedule the oppointment directly.</li>
                    <li className='text-lg mb-2'>2. Search for you physician here, and contact their office.</li>
                    <li className='text-lg mb-2'>3. View our physicians who are accepting new patients, use the online scheduling to select tool to select an appointment time</li>
                </ul>
                <button className=' btn2 mt-4'>Loren More</button>
           </div>

           <div className=' relative z-10'>
                <img src={img} alt="" />
           </div>
        </div>
    );
};

export default Feature;