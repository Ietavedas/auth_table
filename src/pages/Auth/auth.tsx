import React, { useEffect } from "react";
import {
	Outlet,
  useNavigate
  } from "react-router-dom"
import './styles.less'
import { useAppSelector } from "../../hooks/redux";

const Auth = () => {
  const isAuth = useAppSelector((state => state.auth.isAuthenticated))
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/profile');
    }
  }, [isAuth]);

  return (
    <div className="auth">
      <Outlet />
    </div>
  )
}

export default React.memo(Auth);