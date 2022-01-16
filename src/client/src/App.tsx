import React from 'react';
// import './AppStyle.css';
import { Row, Button, DatePicker, version, Col, Input, Avatar, List, Space, Tag, Divider, message, Empty } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import { hot } from 'react-hot-loader/root';

import 'antd/dist/antd.css';
import { Header } from './components/header/Header';
import { CodeEditor } from './components/editor/Editor';
import { DeployButtons } from './components/deploy/DeployButtons';
import { EditButtons } from './components/edit/EditButton';

export type ListDataType = {
  id: number;
  title: string;
  language: string;
  tags?: string[];
  code: string;
};

const App = (): JSX.Element => {
  // title: `VeryVeeeeryLongFunctionNameAsExampleForJavaFunctionNamesAndTestMyUiExperience.js`,
  const listData: ListDataType[] = [
    {
      id: 1,
      language: 'typescript',
      title: `FunctionAdapterTest.js`,
      tags: ['user', 'js', 'test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 2,
      title: `ReportBuilder.ts`,
      language: 'typescript',
      tags: ['report', 'unique'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 3,
      title: `TestDownloadCSV.cpp`,
      tags: ['csv', 'js', 'test'],
      language: 'typescript',
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 4,
      title: `TestReportAdapter.ts`,
      language: 'typescript',
      tags: ['report', 'ts', 'test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 5,
      title: `ParseHTMLSource.ts`,
      language: 'typescript',
      tags: ['HTML', 'ts', 'parser'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 6,
      title: `GetEveryCount.ts`,
      language: 'typescript',
      tags: ['count', 'ts'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 7,
      title: `SimulateUploadCount.ts`,
      language: 'typescript',
      tags: ['count', 'ts', 'upload'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 8,
      title: `AdapterUserScoreTest.ts`,
      language: 'typescript',
      tags: ['adapter', 'ts', 'test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 9,
      title: `AdapterReportCsvCounterData.js`,
      language: 'typescript',
      tags: ['adapter', 'js', 'test'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 10,
      title: `TestUserRating.ts`,
      language: 'typescript',
      tags: ['adapter', 'js'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 11,
      title: `IntegrationDtoDescription.ts`,
      language: 'typescript',
      tags: ['js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 12,
      title: `ScoreCsvCounter.ts`,
      language: 'typescript',
      tags: ['user', 'test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 13,
      title: `AnswerUsersCount.ts`,
      language: 'typescript',
      tags: ['user', 'js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 14,
      title: `UsersFriendsCount.ts`,
      language: 'typescript',
      tags: ['adapter', 'ts'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 15,
      title: `UsersFunctionsDtoCount.ts`,
      language: 'typescript',
      tags: ['test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 16,
      title: `Main.ts`,
      language: 'typescript',
      tags: ['js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 17,
      title: `CreateNewDtoUser.ts`,
      language: 'typescript',
      tags: ['user'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
    {
      id: 18,
      title: `CreateUserFriend.ts`,
      language: 'typescript',
      tags: ['adapter'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 19,
      title: `CreateDataFactory.ts`,
      language: 'typescript',
      tags: ['test'],
      code: `
        @Get()
        getAll() {
          return this.fnService.getAllFn();
        }
      `,
    },
  ];

  const [listDataFiltered, setListDataFiltered] = React.useState(listData);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const submitHandler = data => {
    // TODO: send data to server
    // TODO: тут все сломается если будет удаление
    data.id = listData.length + 1;
    listData.push(data);
    setListDataFiltered(listData);
    handleCancel();
    message.success(`Функция ${data.title} успешно создана!`);
    linkHandle(data);
  };

  const onSearch = event => {
    const data = event.target.value;
    if (data === '') {
      setListDataFiltered(listData);
    } else {
      const res = listData.filter(
        x =>
          x.title.toLowerCase().includes(data.toLowerCase()) ||
          x.tags.filter(a => a.toLowerCase().includes(data.toLowerCase())).length > 0,
      );
      setListDataFiltered(res);
    }
  };

  function choose(name: string) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      count += name.charCodeAt(i);
    }
    const index = Math.floor(count / 148);
    return colors[index];
  }

  const colors = ['green', 'blue', 'red', 'cyan', 'magenta', 'geekblue'];

  const [id, setId] = React.useState(0);
  const [code, setCode] = React.useState('');
  const [fileName, setFileName] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [data, setData] = React.useState({});

  const linkHandle = event => {
    setData(event);
    setId(event.id);
    setFileName(event.title);
    setLanguage(event.language);
    setCode(event.code);
  };

  const onChangeEditor = event => {
    // TODO: Ужасающий костыль
    // console.log(listData.filter((x) => x.id === id));
    listData.filter(x => x.id === id)[0].code = event;
    listDataFiltered.filter(x => x.id === id)[0].code = event;
  };

  return (
    <div className="App">
      <Header
        onSearch={onSearch}
        submitHandler={submitHandler}
        showModal={showModal}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
      <Row className="Body" justify="space-around" align="top">
        <Col span={8}>
          <List
            size="small"
            header={
              <Divider orientation="left">
                <h3>Список существующих функций</h3>
              </Divider>
            }
            pagination={{
              pageSize: 13,
            }}
            bordered
            dataSource={listDataFiltered}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={
                    <Button type="link" onClick={() => linkHandle(item)}>
                      {item.title}
                    </Button>
                  }
                />
                {item.tags?.map(x => {
                  return (
                    <Tag color={choose(x)} key={x}>
                      {x}
                    </Tag>
                  );
                })}
              </List.Item>
            )}
          />
        </Col>

        <Col span={15}>
          {fileName === '' ? (
            <Row justify="center" align="middle" style={{ height: '70vh' }}>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>Выберите функцию из списка слева</span>} />
            </Row>
          ) : (
            <CodeEditor name={fileName} code={code} language={language} onChangeEditor={onChangeEditor} />
          )}
          {fileName === '' ? (
            <></>
          ) : (
            <div>
              <EditButtons data={data} />
              <DeployButtons fileName={fileName} />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default module.hot ? hot(App) : App;
