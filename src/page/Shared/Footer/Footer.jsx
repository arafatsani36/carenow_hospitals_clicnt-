import './Footer.css'
import logo from '../../../assets/logo/logo.png'
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
const Footer = () => {
    return ( 
        <div className='footer mt-5'>
           <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                   <img className='w-12 h-12' src={logo} alt="" />
                    <p className=' text-base'>Copyright © 2023 - All right reserved Powered by <span className='text-black'>care now hospitals</span></p>
                </aside> 
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <BiLogoFacebook className=' text-3xl cursor-pointer bg-black rounded-full p-1'></BiLogoFacebook>
                    <BiLogoTwitter className=' text-3xl cursor-pointer bg-black rounded-full p-1'></BiLogoTwitter>
                    <FaInstagram className=' text-3xl cursor-pointer bg-black rounded-full p-1'></FaInstagram>
                    <FaPinterestP className=' text-3xl cursor-pointer bg-black rounded-full p-1'></FaPinterestP>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;