import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Menu } from 'antd';

import './styles.less';

const Navigation:FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClick = ({ key }: { key: string; }) => {
        navigate(key);
    }

    return (
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={onClick}
          items={[
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: "Профиль",
            },
            {
              key: '/dashboard',
              icon: <VideoCameraOutlined />,
              label: "Пример",
            }
          ]}
        />
    )
}

export default Navigation;