import Cover from '../../Components/Cover/Cover';
import './About.css'
import aboutImg from '../../assets/banner/about.jpg'
import img1 from '../../assets/about/about1.webp'
import img2 from '../../assets/about/about2.jpg'
import img3 from '../../assets/about/about3.jpg'
import img4 from '../../assets/about/about4.avif'
import img5 from '../../assets/about/about5.jpg'
import img6 from '../../assets/about/about6.jpg'
import img7 from '../../assets/about/about7.jpg'
import img8 from '../../assets/about/about8.webp'

const About = () => {
    return (
        <div>
            <Cover img={aboutImg} title="about"></Cover>
            {/* <div className='grid md:grid-cols-2'> */}
            <div className='imgBox mx-auto mt-20'>
                    <span style={{ '--i': 1 }}><img src={img1} alt="" /></span>
                    <span style={{ '--i': 2 }}><img src={img2} alt="" /></span>
                    <span style={{ '--i': 3 }}><img src={img3} alt="" /></span>
                    <span style={{ '--i': 4 }}><img src={img4} alt="" /></span>
                    <span style={{ '--i': 5 }}><img src={img5} alt="" /></span>
                    <span style={{ '--i': 6 }}><img src={img6} alt="" /></span>
                    <span style={{ '--i': 7 }}><img src={img7} alt="" /></span>
                    <span style={{ '--i': 8 }}><img src={img8} alt="" /></span>
                </div>
            <div>
                    <h2 className=' text-2xl text-center lg:text-2xl font-bold p-4 mt-20'><span className='titleUnderline'>Carenow <span className='OurDoctorsSpan'>Hospitals</span></span> </h2>

                    
                    <p>A hospital is a vital cornerstone of healthcare infrastructure, serving as a sanctuary for those in need of medical care. These institutions are staffed by a dedicated team of healthcare professionals, including doctors, nurses, surgeons, and specialists, all committed to improving the well-being of their patients. Hospitals offer a comprehensive range of services, covering everything from emergency care to complex surgeries, utilizing state-of-the-art medical technology and equipment.In addition to critical care, hospitals often provide various specialized departments such as obstetrics, pediatrics, cardiology, radiology, and more. They cater to a diverse spectrum of medical needs, including routine check-ups, disease management, and rehabilitation services. Many hospitals also offer mental health support and counseling to address psychological well-being.Hospitals are not only centers for patient care but also hubs for medical research and innovation. They contribute to the advancement of medical science and serve as educational institutions for training the next generation of healthcare professionals.Patient safety and comfort are paramount in a hospitals environment. Patients can receive inpatient care, staying within the hospitals premises, or access outpatient services for consultations, diagnostics, and follow-up appointments.The importance of hospitals in maintaining public health cannot be overstated. These institutions play a crucial role in saving lives, preventing disease, and promoting overall community health. In times of emergencies, pandemics, or routine medical needs, hospitals stand ready to provide essential care and support, making them an indispensable part of any societys healthcare ecosystem.</p>
                </div>
                
            </div>
            
        // </div>
    );
};

export default About;