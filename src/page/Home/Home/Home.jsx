import BookAppointment from '../BookAppointment/BookAppointment';
import Banner from '../Banner/Banner';
import BookAppointmentHeader from '../BookAppointmentHeader/BookAppointmentHeader';
import CheckUp from '../CheckUp/CheckUp';
import SomeInformation from '../SomeInformation/SomeInformation';
import OurFacilities from '../OurFacilities/OurFacilities';
import OurDoctors from '../OurDoctors/OurDoctors';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Feature from '../Feature/Feature';
import Faq from '../Faq/Faq';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookAppointmentHeader></BookAppointmentHeader> 
            <BookAppointment></BookAppointment>
            <CheckUp></CheckUp>
            <SomeInformation></SomeInformation>
            <OurFacilities></OurFacilities>
            <OurDoctors></OurDoctors>
            <About></About>
            <Feature></Feature>
            <Faq></Faq>
            <Testimonials></Testimonials>  
            <Blog></Blog>  
        </div>
    );
};

export default Home;