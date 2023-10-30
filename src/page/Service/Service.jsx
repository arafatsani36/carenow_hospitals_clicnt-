import './Service.css'
import { useEffect, useState } from 'react';
import Cover from '../../Components/Cover/Cover';
import serviceBanner from '../../assets/banner/serviceBanner.jpg'
import { Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';
const Service = () => {
    const[services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div>
            <Cover img={serviceBanner} title="service"></Cover>
           <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-5 px-4'>
            {
                services.map(service => 
                <div className='service' key={service.id}>
                    <div>
                     <img className='hover:scale-110 transition duration-500 cursor-pointer' src={service.image} alt="" />
                    </div>
                    <div className=' pl-2'>
                        <h2 className='text-2xl font-bold my-2'>{service.title}</h2>
                        <p className=' text-gray-700'>{service.description.slice(1, 300)}.....</p>
                        <Link to={`/service/${service.id}`}>
                           <p className='text-center mt-4 p-2 text-lg serviceBtn md:w-48 m-auto rounded-full flex justify-center items-center'>Read More <BsArrowRight className='text-2xl cursor-pointer ml-2'></BsArrowRight></p>
                        </Link>
                    </div>
                        
                </div>)
            }
           </div>
        </div>
    );
};

export default Service;