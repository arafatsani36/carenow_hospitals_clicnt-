import './main.css'
import { Outlet } from "react-router-dom";
import { useEffect, useState} from "react";
import RiseLoader from "react-spinners/RiseLoader";
import loader from '../../assets/loader/loader.gif'
import Header from "../../page/Shared/Header/Header";
import Footer from "../../page/Shared/Footer/Footer";


const Main = () => {
    // preloading 
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div>
           {loading ? (
                <div className="flex flex-col items-center justify-center h-screen">
                <img src={loader} className="h-[100px] w-[100px]  mx-auto"></img>
                <h2 className=" text-center text-4xl loaderTitle" data-text="Loading....">Loading....</h2>
                </div>

        
        ) : (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
        )}
        </div>
       
    );
};

export default Main;