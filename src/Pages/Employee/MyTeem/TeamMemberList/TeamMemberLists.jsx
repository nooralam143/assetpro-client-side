import useUserDetails from "../../../../Hooks/useUserdetails";


const TeamMemberLists = () => {
    const { allUsersDetails } = useUserDetails();
    return (
        <div>
      <h2 className='text-3xl font-black bg-red-100 p-3 my-2'>All Teem Member List:</h2>
      <ul className='border rounded grid grid-cols-3 gap-3'>
        {allUsersDetails.map((user) => {

          return (
            <li
              key={user._id}
              className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-10'
            >
              <img
                src={user.photo}
                alt={user.name}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
              <div>
                <p>Name: {user.name}</p>
                <p>Member Type: {user.role}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    );
};

export default TeamMemberLists;