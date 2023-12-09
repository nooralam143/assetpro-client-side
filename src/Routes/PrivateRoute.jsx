import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from 'flowbite-react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return (
            <div className="text-center">
       <Spinner color="info" aria-label="Info spinner example" />
      </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location.pathname }} to="/login" replace ></Navigate>;

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}