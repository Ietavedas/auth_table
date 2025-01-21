import React from "react";
import LayoutPage from '../../components/Layout';
import type { RootState } from '../../store';
import { useAppSelector } from '../../hooks/redux';

const Profile = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <LayoutPage title="Профиль">
      <div>Email: {user && user.email}</div>
    </LayoutPage>
  )
}

export default Profile;