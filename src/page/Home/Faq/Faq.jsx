import './Faq.css';
import img from '../../../assets/doctor/faq.jpg'

const Faq = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 items-center justify-between flex-col lg:flex-row w-[90%] mx-auto'>
           <div>
                <img src={img} alt="" />
           </div>

           <div>
           <div className="join join-vertical w-full">
           <h2 className='text-2xl lg:text-3xl font-bold text-center p-4 mt-4 mb-7'> Most questions by our beloved patients</h2>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-2" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium">
                        What is your Care Now?
                    </div>
                    <div className="collapse-content"> 
                    <p>One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                    What happens if I need to go a hospital?
                    </div>
                    <div className="collapse-content"> 
                    <p>One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                      Can I visit your medical office?
                    </div>
                    <div className="collapse-content"> 
                    <p>One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                      Does you provide urgent care?
                    </div>
                    <div className="collapse-content"> 
                    <p>One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
                    </div>
                </div>
                </div>

           </div>
        </div>

        
    );
};

export default Faq;