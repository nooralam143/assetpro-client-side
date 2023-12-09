import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            this is dashboard
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;