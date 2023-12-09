import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";


const SignIn = () => {
    
    const { signIn, user } = useContext(AuthContext);
    const [loginSuccess, setLoginSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
const role ="employee"
    


    console.log('location in the login page', location);
    console.log('user in the login page', user);
    if(user){
        navigate(location?.state?.from || '/');
    }
    const handalLogin = async (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
    
      try {
        await signIn(email, password);
        e.target.reset();
        setLoginSuccess('Login Successful');
        navigate(location?.state?.from || '/');
      } catch (error) {
        console.error(error);
        setLoginError(error.message);
      }
    };
    
        return (
            <>
          <Card className="max-w-sm mx-auto mt-10 mb-10">
            <form className="flex flex-col gap-4" onSubmit={handalLogin}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" name="email" type="email" autoComplete="email" placeholder="name@email.com" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" name="password" autoComplete="password" type="password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit">SignIn</Button>
            </form>
            {loginError && <p className="text-center text-red-700">{loginError}</p>}
           {loginSuccess && <p className="text-center text-green-700">{loginSuccess}</p>}
           <div className="text-center pb-2">
               <Link to="/signup-employee">
                   Not have an account? <span className="text-blue-600">SignUp an employee here</span>
               </Link>
           </div>
           <div className="flex flex-row text-blue-600 font-bold justify-center items-center text-center pb-8 ">
           <SocialLogin role={role}></SocialLogin>
           </div>
          </Card>
           </>
        );
      }

export default SignIn;
