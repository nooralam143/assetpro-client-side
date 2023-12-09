import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import useUserDetails from "../../Hooks/useUserdetails";

import MyCustomeRequests from "./EmployeeHome/MyCustomeRequests/MyCustomeRequests";
import MyPendingRequests from "./EmployeeHome/MyPendingRequests/MyPendingRequests";
import MyMonthlyRequests from "./EmployeeHome/MyMonthlyRequests/MyMonthlyRequests";
import Slidder from "./DefaultHome/Slidder/Slidder";
import AboutSection from "./DefaultHome/About/AboutSection";
import Package from "./DefaultHome/Package/Package";
import ReviewSwiper from "./DefaultHome/Review/Review";
import RequestdLatestItem from "./EmployeeHome/MyMonthlyRequests/RequestdLatestItem";





const Home = () => {
    const { user } = useContext(AuthContext);
    const { loggedInUserDetails } = useUserDetails();

    console.log("User loggedInUserDetails:", loggedInUserDetails);
    console.log("User object:", user);

    const userRole = loggedInUserDetails?.role;
    console.log("User role:", userRole);


    return (

        <div>
            <Helmet>
                <title>AssetPro | Home</title>
            </Helmet>
            <div>
                {!userRole &&
                    <>
                        <Slidder></Slidder>
                        <AboutSection></AboutSection>
                        <Package></Package>
                        <ReviewSwiper></ReviewSwiper>
                    </>
                }

                {userRole == "employee" &&
                    <>
                        <div>
                        <div className="flex flex-row justify-center items-center gap-5">
  <div className="border bg-slate-900 text-white h-28 w-1/5 flex items-center justify-center">
    <MyCustomeRequests></MyCustomeRequests>
  </div>
  <div className="border bg-pink-500 text-white h-28 w-1/5 flex items-center justify-center">
    <MyPendingRequests></MyPendingRequests>
  </div>
  <div className="border bg-pink-700 text-white h-28 w-1/5 flex items-center justify-center">
    <MyMonthlyRequests></MyMonthlyRequests>
  </div>
 
</div>
<div className="p-5">
<RequestdLatestItem></RequestdLatestItem>
</div>
                        </div>
                        </>
                }
                        {userRole == "admin" &&
                            <div>
                                Admin login
                            </div>
                        }

                    </div>
            </div>
    );
};

export default Home;