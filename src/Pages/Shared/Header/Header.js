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
      </div>
    );
};

export default Header;