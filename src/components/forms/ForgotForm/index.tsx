import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import type { RootState } from '../../../store';
import { UserOutlined } from '@ant-design/icons';
import { Form, Button, Input, Checkbox, Flex } from 'antd';
import { useErrorMeessage } from "../../../hooks/errorMessage";

const ForgotForm:FC = () => {
  const [form] = Form.useForm();
  const { error } = useAppSelector((state: RootState) => state.auth);
  const errorText = useErrorMeessage(error);

  const handleSubmit = () => {

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

      {error && <div className="error">{errorText} <br /><br /></div>}

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Отправить
        </Button>
        or <a href="/auth/login">Войти</a>
      </Form.Item>
    </Form>
  );
}

export default ForgotForm;