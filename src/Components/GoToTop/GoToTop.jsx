
import './GoToTop.css';
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const GoToTop = () => {
    const [visible, setVisible] = useState(false)
    const goToBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior:'smooth'})
    }

    const listenToScroll = () => {
        let hightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > hightToHidden){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
 

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    },[])



    return (
        <>
        {visible && 
            <div className='GoToTop' onClick={goToBtn}>
              <div className='top-btn'>
                <BiUpArrowAlt   className='GoToTopIcon text-3xl font-bold'/>
              </div>
            </div>
        }
        </>
    );
};

export default GoToTop;