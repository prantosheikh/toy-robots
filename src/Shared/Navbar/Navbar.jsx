import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContext);

  const handlerLogout = () => {
    logOutUser()
      .then((r) => {
        console.log(r.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navBar = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blog</Link>
      </li>
      <li tabIndex={0}>
        <Link>About</Link>
      </li>

      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-slate-100 py-6 mt-5 px-8 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-3">
              <img src={logo} width={55} alt="" />
              <span className="text-4xl font-semibold font-mono">
                Toy <span className="text-blue-700">robots</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
        <div className="navbar-end">
          <img
            title={user?.displayName}
            className="rounded-full w-12 mr-5 "
            src={user?.photoURL}
            alt=""
          />

          {user ? (
            <button
              title="Logout"
              onClick={handlerLogout}
              className="text-lg font-bold py-2 px-6 cursor-pointer bg-blue-600 hover:bg-blue-800  text-white"
            >
              <span>Logout</span>
            </button>
          ) : (
            <Link to="/login">
              <button
                title="Login"
                className="text-lg font-bold py-2 px-6 cursor-pointer text-white bg-blue-600 hover:bg-blue-800"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
