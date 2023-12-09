import { useEffect, useState } from 'react';
import useUserDetails from '../../../../Hooks/useUserdetails';

const UpCommingEvents = () => {
  const { allUsersDetails } = useUserDetails();
  const [upcomingBirthdays, setUpcomingBirthdays] = useState(allUsersDetails);

  useEffect(() => {
    const today = new Date(); 

    // get birthdy month user data
    const upcoming = allUsersDetails.filter((user) => {
      const birthday = new Date(user.dateOfBirth);
      birthday.setFullYear(today.getFullYear());
      return (
        birthday.getMonth() === today.getMonth()
        
      );
    });
    
    // Sort upcoming birthdays by date
    upcoming.sort((a, b) => {
      const dateA = new Date(a.dateOfBirth);
      const dateB = new Date(b.dateOfBirth);
      return dateA - dateB;
    });
    setUpcomingBirthdays(upcoming);
  }, [allUsersDetails]);

        return (
          <div>
      <h2 className='text-3xl font-black bg-red-100 p-3 my-2'>Upcoming Events:</h2>
      <ul className='border rounded grid grid-cols-3 gap-3'>
        {upcomingBirthdays.map((user) => {
            const today = new Date();
          const birthday = new Date(user.dateOfBirth);
          birthday.setFullYear(today.getFullYear());
          // Convert birthday to Bangladesh time
          const options = { timeZone: 'Asia/Dhaka' };
          const birthdayBangladesh = new Date(
            birthday.toLocaleString('en-US', options)
          );

          // Calculate remaining days
          const timeDifference = birthdayBangladesh.getTime() - Date.now();
          const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

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
                <p>Email: {user.email}</p>
                <p>Date of Birth: {user.dateOfBirth}</p>
                {remainingDays <= 0 ? (
                  <p className='text-green'>Happy Birthday!</p>
                ) : (
                  <p>Remaining Days: {remainingDays} days</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpCommingEvents;
