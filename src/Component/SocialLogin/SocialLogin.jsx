import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const SocialLogin = ({ role }) => {
    const { signinWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const SignUpDate = new Date();
    const options = { timeZone: 'Asia/Dhaka' };
    const signUpDateString = SignUpDate.toLocaleString('en-US', options);
    const handleGoogleSignIn = () => {
        signinWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role,
                    signUpDateString
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;