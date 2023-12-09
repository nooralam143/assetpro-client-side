import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../NavBar/Navbar.css"
import { AuthContext } from '../../providers/AuthProvider';
import useUserDetails from '../../Hooks/useUserdetails';




const NavbarComponent = () => {
  const { user, logOut } = useContext(AuthContext);
  const {loggedInUserDetails}=useUserDetails();
  // const {loggedInUserDetails}= useUserDetails()
  // console.log("user is", user);
  // console.log("loggin user details",loggedInUserDetails);


  const handalSignout = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <Navbar fluid rounded>
      <Link href="/" className='flex'>
        <img src="/ap-logo.svg" className="mr-3 h-6 sm:h-9" alt="AssetPro Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#363E51]">Asset<span className='text-[#FF1F1F]'>Pro</span></span>
      </Link>
      <div className="flex md:order-2">
        {
          !user ?
            <Link to="/login">
              <button className="btn btn-sm h-10 pr-1">Login</button>
            </Link>
            :
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item> <span onClick={handalSignout}>Sign out</span></Dropdown.Item>
              </Dropdown>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <li><NavLink to="/">Home</NavLink></li>
        {!user &&
          <>
            <li><NavLink to="/signup-employee">Join As Employee</NavLink></li>
            <li><NavLink to="/signup-admin">Join As HR/Admin</NavLink></li>
          </>
        }

        {
            user &&  loggedInUserDetails?.role === "employee" && <>
            <li><NavLink to="/my-teem">My Teem</NavLink></li>
            <li><NavLink to="/my-assets">My Assets</NavLink></li>
            <li><NavLink to="/request-asset">Request for an Asset</NavLink></li>
            <li><NavLink to="/custome-request-assets">Make a Custome Request</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li></>
        }
             {
            user &&  loggedInUserDetails?.role === "admin" &&
            <>
        <li><NavLink to="/employee-list">Employee List</NavLink></li>
        <li><NavLink to="/add-employee">Add Employee</NavLink></li>
        <li><NavLink to="/asset-list">Asset List</NavLink></li>
        <li><NavLink to="/dashboard/add-asset">Add Asset</NavLink></li>
        <li><NavLink to="/all-request">All Request</NavLink></li>
        <li><NavLink to="/custome-request-list">Custome Requests List</NavLink></li>
        </>
        }

      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;