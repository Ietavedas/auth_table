import React, { FC } from "react";
import { Row, Typography } from 'antd';

const { Title, Text, Link } = Typography;

const NotFound:FC = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{height:"100%", flexDirection: "column"}}>
        <Title style={{fontSize: '100px'}}>404</Title>
        <Text style={{fontSize: '50px'}}>Страница не найдена</Text>
        <br />
        <Link href="/profile" style={{fontSize: '20px'}}>Вернуться на главную</Link>
      </Row>
    </>
  )
}

export default NotFound;