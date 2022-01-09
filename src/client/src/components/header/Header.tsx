import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { NewFunction } from '../newFunction/NewFunction';

export const Header = ({ onSearch }): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
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
        <Button
          type="link"
          href="/"
          style={{ color: 'white', fontSize: '22px' }}
        >
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
          onClick={showModal}
        >
          Создать новую функцию
          <PlusOutlined />
        </Button>
        <Modal
          title="Создание новой функции"
          centered
          visible={isModalVisible}
          // onOk={handleOk}
          onCancel={handleCancel}
          width={600}
          footer={[]}
        >
          <NewFunction />
        </Modal>
      </Col>
    </Row>
  );
};
