import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user, logout} = useContext(AuthContext);

  const handleLogout = () =>{
    logout()
    .then(toast.success("Logout Successful !!"))
    .catch(e => console.error(e))
  }

    return (
      <div className="navbar bg-base-100 rounded-sm shadow-2xl mb-3  top-0">
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
              <li>
                <Link to="/">Home</Link>
              </li>

              {user?.uid ? (
                <>
                  <li>
                    <Link to="/myReview" className=" font-bold">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/addService" className=" font-bold">
                      Add Service
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} className=" font-bold">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className=" font-bold">
                    Login
                  </Link>
                </li>
              )}
              <li>
                <Link to="/blog" className=" font-bold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" flex items-center">
            <div>
              <img
                className=" w-12 mr-2"
                src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-balance-icon-png-image_4276078.jpg"
                alt=""
              />
            </div>
            <div>
              <p className=" font-serif normal-case text-xl tracking-widest font-bold">
                ATTORNA
              </p>
              <p className=" text-[10px] font-medium tracking-widest text-[#555555]">
                ATTORNEY AT LAW
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" className=" font-bold">
                Home
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/myReview" className=" font-bold">
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/addService" className=" font-bold">
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout} className=" font-bold">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className=" font-bold">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link to="/blog" className=" font-bold">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;