import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assetpro-server-side.vercel.app'
})

const useUserDetails = () => {
    const { user } = useContext(AuthContext);



    const {data: allUsersDetails = [], error, isPending} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })

    const loggedInUserDetails = user ? allUsersDetails.find(userinfo => userinfo.email === user.email) : null;

    return {
        loggedInUserDetails,
        allUsersDetails,
        error,
        isPending,
    };
}

export default useUserDetails;
