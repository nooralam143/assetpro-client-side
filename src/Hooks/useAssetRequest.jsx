import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useUserDetails from "./useUserdetails";


const useAssetRequest = () => {
    const {loggedInUserDetails}=useUserDetails();
    const axiosPublic = useAxiosPublic()
    const {data: myRequestAsset = [], error, isPending} = useQuery({
        queryKey: ['requestAsset'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/request-assets');
            // Filter data based on requestUser
      const filteredData = res.data.filter((item) => item.requestUser === loggedInUserDetails.email);
      return filteredData;
        }
    })
    return {
        myRequestAsset,
        error,
        isPending,
    };
};

export default useAssetRequest;