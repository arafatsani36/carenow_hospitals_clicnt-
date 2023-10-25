import { Outlet } from "react-router-dom";
import Header from "../page/Shared/Header/Header";
import Footer from "../page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;