import { useState } from 'react';
import './OurDoctors.css'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useEffect } from 'react';

const OurDoctors = () => {

    const[doctors, setDoctors] = useState([]);

    // pagination status  start
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    // pagination status end


// Calculate the first and last post index for the current page
  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;
  const currentDoctors = doctors.slice(firstPostIndex, lastPostIndex);

  const pages = Math.ceil(doctors.length / postPerPage);
  const numbers = Array.from({ length: pages }, (_, i) => i + 1);

  // pagination perPage 
  // Function to change the current page
  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage > 2 ? currentPage - 2 : currentPage - 1)
    }
  };

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  
  };


    useEffect(() =>  {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    })




    return (
        <div className=' mx-auto md:w-[90%] lg:w-[90%] OurDoctors'>
            <h2 className=' text-2xl lg:text-3xl font-bold text-center p-4 my-4'><span className='titleUnderline'>Our <span className='OurDoctorsSpan'>Doctor</span></span> </h2>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    currentDoctors.map(doctor => 
                    <div key={doctor.ID} className='container '>
                
                    <div className='OurDoctorsBox'>
                        <img src={doctor.Photo} alt="" /> 
                    
                    <div className="info w-[100%]">
                        <div className=''>
                          <h2 className='text-xl font-bold mb-1 text-center'>{doctor.Name}</h2>
                          <h4 className='text-lg font-bold mb-2 text-white text-center'>{doctor.Department}</h4>
                        </div>
                        <p className='text-lg mb-1'><BsFillTelephoneFill className='text-lg'></BsFillTelephoneFill> {doctor.Phone}</p>
                        <p className='text-lg mb-1'><MdEmail className='text-lg'></MdEmail> {doctor.Email}</p>
                       
                    </div>
                    </div>                 
                    </div>
                    
                )
                }
        </div> 
            
      {/* Pagination start  */}
       <div className='flex items-center justify-center gap-5 PaginationContainer my-8'>
       {currentPage > 1 && (
          <button className='paginationBtn flex items-center justify-center' onClick={prevPage}><GrFormPrevious></GrFormPrevious></button>
        )}
          {
            numbers.map((n, i) => (
              <div key={i} className={currentPage == n ? "paginationActive" : ""}>
                <button className='paginationBtn' onClick={() => changeCurrentPage(n)}>{n}</button> 
              </div>
            ))
          }
          {currentPage < pages && (
            <button className='paginationBtn flex items-center justify-center' onClick={nextPage}><GrFormNext></GrFormNext></button>
           )}
       </div>


      {/* </PaginationContainer> */}

      {/* Pagination end  */}
       
        </div>
    );
};

export default OurDoctors;