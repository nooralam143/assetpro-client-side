import { Button, TextInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUserDetails from "../../Hooks/useUserdetails";



const UserProfile = () => {
  const axiosPublic = useAxiosPublic();
  const {loggedInUserDetails}=useUserDetails();
  console.log(loggedInUserDetails);

const handalUpdateProfile = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const dateOfBirth = form.dateOfBirth.value;
const updateUser = {name, dateOfBirth}

try {
  const response = await axiosPublic.put(`/users/${loggedInUserDetails._id}`, updateUser);

  if (response.status === 200) {
      toast.success('user information update successfully');
  } else {
      toast.error('Error user information update');
  }
} catch (error) {
  console.error('There was a problem user information update:', error);
}

}

  return (
    

<div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">

          <div className="max-w-sm mx-auto mt-10 mb-10">
            <form className="flex flex-col gap-4" onSubmit={handalUpdateProfile}>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <TextInput id="name" name="name" defaultValue={loggedInUserDetails?.name} type="name" autoComplete="Full Name" placeholder="Full Name" required /> 
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {loggedInUserDetails?.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <TextInput id="dateOfBirth" name="dateOfBirth" defaultValue={loggedInUserDetails?.dateOfBirth} type="text" autoComplete="Full Name" placeholder="Date of Birth" required /> 
                
                </dd>
              </div>

              <Button type="submit">Update Profile</Button>
            </form>

          </div>


        </dl>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default UserProfile;