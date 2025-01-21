import React, {FC} from "react";
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface ProtectedRouteType {
  children: JSX.Element;
}

const ProtectedRoute = ({children}: ProtectedRouteType):JSX.Element => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />
  }

  return children;
};

export default ProtectedRoute;