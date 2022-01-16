import React from 'react';
import { Button, message } from 'antd';

export const DeployButtons = ({ fileName }) => {
  const [isLoading3, setIsLoading3] = React.useState(false);
  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);

  const success = () => {
    message.success(`Успешный деплой функции ${fileName}`);
  };

  const error = () => {
    message.error(`При деплое функции ${fileName} произошла ошибка, посмотрите консоль`);
  };

  return (
    <div className="deploy-buttons-group" style={{ margin: '10px', display: 'inline-block' }}>
      <Button
        style={{ margin: '10px' }}
        type="primary"
        loading={isLoading1}
        onClick={() => {
          setIsLoading1(true);
          setTimeout(() => {
            setIsLoading1(false);
            success();
          }, 300);
        }}
      >
        Deploy to YandeCloud
      </Button>
      <Button
        style={{ margin: '10px' }}
        type="primary"
        loading={isLoading2}
        onClick={() => {
          setIsLoading2(true);
          setTimeout(() => {
            setIsLoading2(false);
            success();
          }, 900);
        }}
      >
        Deploy to SberCloud
      </Button>
      <Button
        style={{ margin: '10px' }}
        type="primary"
        loading={isLoading3}
        onClick={() => {
          setIsLoading3(true);
          setTimeout(() => {
            setIsLoading3(false);
            error();
          }, 1500);
        }}
      >
        Deploy to Selectel
      </Button>
    </div>
  );
};
