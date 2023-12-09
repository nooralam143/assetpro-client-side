import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Select, Card, Checkbox, Datepicker, Label, TextInput } from 'flowbite-react';
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2'

const SignupAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const [registerError, setRegisterError] = useState('');
    const [selectedPackageId, setSelectedPackageId] = useState('5 member for $5');
    const handlePackageChange = (e) => {
        setSelectedPackageId(e.target.value);
    };
    const [success, setSuccess] = useState('');
    const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const role = "admin";
    const SignUpDate = new Date();
    const options = { timeZone: 'Asia/Dhaka' };
    const signUpDateString = SignUpDate.toLocaleString('en-US', options);

    if (user) {
        navigate(location?.state?.from || '/');
    }
    const handalRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const companyName = form.get('companyName');
        const MemberLimit = form.get('BuyPackage');
        const dateOfBirth = form.get('dateOfBirth');
        const password = form.get('password');
        console.log(name, photo, email, companyName, MemberLimit, dateOfBirth, password);
    
       
        // Registration validation start
        if (password.length < 6) {
            setRegisterError('password should have 6 characters')
            return;
        }
        if (!/[A-Z]/.test(password)) { // Check for the absence of a capital letter
            setRegisterError('Password should have a capital letter');
            return;
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password)) {
            setRegisterError('Password should have at least one special character');
            return;
        }
        // Registration validation End
        setRegisterError('');
        setSuccess('');

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name, photo)
            .then(() => {
                // create user entry in the database
                const AdminUserInfo = {
                    name,
                    email,
                    photo,
                    dateOfBirth,
                    companyName,
                    packageId: selectedPackageId,
                    role,
                    signUpDateString
                }
                axiosPublic.post('/users', AdminUserInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database')
                        
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <>
            <Helmet>
                <title>AssetPro | Sign Up Admin</title>
            </Helmet>
            <Card className="max-w-sm mx-auto mt-10 mb-10">
                <form className="flex flex-col gap-4" onSubmit={handalRegister}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Full Name" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder="Your Full Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Company Name" />
                        </div>
                        <TextInput id="name" name="companyName" type="text" placeholder="Company Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Company Logo URL" />
                        </div>
                        <TextInput id="photo" name="photo" type="text" placeholder="Company Logo URL" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput id="email1" name="email" type="email" autoComplete="email" placeholder="name@email.com" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dateOfBirth" value="Date of Birth" />
                        </div>
                        <Datepicker name="dateOfBirth" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="BuyPackage" value="Select your Package" />
                        </div>
                        <Select id="BuyPackage" name="BuyPackage" value={selectedPackageId} onChange={handlePackageChange} required>
                            <option>5 member for $5</option>
                            <option>10 member for $8</option>
                            <option>20 member for $15</option>
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput id="password1" name="password" autoComplete="password" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="accept" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                            I agree with the&nbsp;
                            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button type="submit">SignUp</Button>
                </form>
                {
                    registerError && <p className="text-center text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-center text-green-700">{success}</p>
                }
                <div className="text-center pb-2 ">
                    <Link to="/login">
                        have a account ? <span className="text-blue-600">Login Here</span>
                    </Link>
                </div>
                <div className="flex flex-row text-blue-600 font-bold justify-center items-center text-center pb-8 ">

                </div>
            </Card>
        </>
    );
}

export default SignupAdmin;