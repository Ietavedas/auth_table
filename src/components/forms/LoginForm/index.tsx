import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loginRequest } from '../../../features/auth/authSlice';
import type { RootState } from '../../../store';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Button, Input, Checkbox, Flex } from 'antd';
import { useErrorMeessage } from "../../../hooks/errorMessage";

interface Values {
  email: string;
  password:string;
  remember?: boolean;
}

const LoginForm:FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state: RootState) => state.auth);
  const errorText = useErrorMeessage(error);

  const handleSubmit = (values: Values) => {
    localStorage.setItem('email', values.email)
    dispatch(loginRequest({ email: values.email, password: values.password }));
  };


  return (
    <Form
      form={form}
      name="login"
      style={{ width: 360 }}
      initialValues={{remember: true}}
      onFinish={handleSubmit}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Введите email"
          }
        ]}
      >
        <Input prefix={<UserOutlined/>} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Введите пароль"
          }
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      {error && <div className="error">{errorText} <br /><br /></div>}

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="/auth/forgot-password">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;