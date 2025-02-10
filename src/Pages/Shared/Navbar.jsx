import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("log out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const menu = (
    <div className="space-x-2 ">
      <Link to="/" className="btn rounded-lg hover:bg-gray-600">
        Home
      </Link>
      {user?.email ? (
        <Link to="/myApplication" className="btn rounded-lg hover:bg-gray-600">
          My Application
        </Link>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="max-w-16" src={logo} alt="" />
          <p className="text-xl font-bold">Job Portal</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} to="/logOut" className="btn">
            Logout
          </button>
        ) : (
          <>
            {" "}
            <Link to="/register">Register</Link>
            <Link to="/logIn" className="btn">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
