import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <HashLoader className='m-auto' color="#36d7b7" />;
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRouter;