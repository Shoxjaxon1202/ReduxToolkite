import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutApi } from '../redux/features/authSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const logOutFn = () => {
        localStorage.removeItem("isAuth");
        dispatch(logoutApi());
    }
  return (
    <div>
        <h4 onClick={logOutFn} className="logout">Log Out</h4>
    </div>
  ) 
}

export default Logout
