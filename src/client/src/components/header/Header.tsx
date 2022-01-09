import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React from 'react';

export const Header = ({ onSearch }) => (
  <Row
    className="Header"
    justify="space-between"
    align="middle"
    style={{
      // border: '1px solid red',
      height: '4em',
      backgroundColor: '#0099e5',
      marginBottom: '1.5em',
    }}
  >
    <Col span={4} offset={3}>
      <Button type="link" href="/" style={{ color: 'white', fontSize: '22px' }}>
        Serverless deploy
      </Button>
    </Col>
    <Col span={8}>
      <Input placeholder="input search text" onChange={onSearch} />
    </Col>
    <Col span={6}>
      <Button
        type="default"
        shape="round"
        style={{
          backgroundColor: '#70C040',
          color: 'white',
          border: 'none',
          fontSize: '16px',
        }}
      >
        Создать новую функцию
        <PlusOutlined />
      </Button>
    </Col>
  </Row>
);
