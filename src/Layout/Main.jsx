import { Outlet } from "react-router-dom";
import NavbarComponent from "../Share/NavBar/NavbarComponent";
import FooterComponent from "../Share/Footer/FooterComponent";


const Main = () => {
    return (
        <div className="container mx-auto">
           <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
        
    );
};

export default Main;