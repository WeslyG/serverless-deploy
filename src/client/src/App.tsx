import React from 'react';
// import './AppStyle.css';
import {
  Row,
  Button,
  DatePicker,
  version,
  Col,
  Input,
  Avatar,
  List,
  Space,
  Tag,
  Divider,
  message,
  Empty,
} from 'antd';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import { Header } from './components/header/Header';
import { CodeEditor } from './components/editor/Editor';
import { DeployButtons } from './components/deploy/DeployButtons';
import { EditButtons } from './components/edit/EditButton';

export function App(): JSX.Element {
  const listData = [
    // {
    //   id: 1,
    //   href: 'https://ant.design',
    //   title: `VeryVeeeeryLongFunctionNameAsExampleForJavaFunctionNamesAndTestMyUiExperience.js`,
    //   tags: ['user', 'js', 'test'],
    // },
    {
      id: 2,
      href: 'https://ant.design',
      title: `ReportBuilder.ts`,
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
      href: 'https://ant.design',
      title: `TestDownloadCSV.cpp`,
      tags: ['csv', 'js', 'test'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 4,
      href: 'https://ant.design',
      title: `TestReportAdapter.ts`,
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
      href: 'https://ant.design',
      title: `ParseHTMLSource.ts`,
      tags: ['HTML', 'ts', 'parser'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 6,
      href: 'https://ant.design',
      title: `GetEveryCount.ts`,
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
      href: 'https://ant.design',
      title: `SimulateUploadCount.ts`,
      tags: ['count', 'ts', 'upload'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 8,
      href: 'https://ant.design',
      title: `AdapterUserScoreTest.ts`,
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
      href: 'https://ant.design',
      title: `AdapterReportCsvCounterData.js`,
      tags: ['adapter', 'js', 'test'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 10,
      href: 'https://ant.design',
      title: `TestUserRating.ts`,
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
      href: 'https://ant.design',
      title: `IntegrationDtoDescription.ts`,
      tags: ['js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 12,
      href: 'https://ant.design',
      title: `ScoreCsvCounter.ts`,
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
      href: 'https://ant.design',
      title: `AnswerUsersCount.ts`,
      tags: ['user', 'js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 14,
      href: 'https://ant.design',
      title: `UsersFriendsCount.ts`,
      tags: ['adapter', 'ts'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 15,
      href: 'https://ant.design',
      title: `UsersFunctionsDtoCount.ts`,
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
      href: 'https://ant.design',
      title: `Main.ts`,
      tags: ['js'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 17,
      href: 'https://ant.design',
      title: `CreateNewDtoUser.ts`,
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
      href: 'https://ant.design',
      title: `CreateUserFriend.ts`,
      tags: ['adapter'],
      code: `
        @Put(':id')
        updateFn(@Param() id: string, @Body() body: any) {
          return this.fnService.updateFn(id, body);
        }`,
    },
    {
      id: 19,
      href: 'https://ant.design',
      title: `CreateDataFactory.ts`,
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

  const onSearch = (event) => {
    const data = event.target.value;
    console.log(data);
    if (data === '') {
      setListDataFiltered(listData);
    } else {
      const res = listData.filter(
        (x) =>
          x.title.toLowerCase().includes(data.toLowerCase()) ||
          x.tags.filter((a) => a.toLowerCase().includes(data.toLowerCase()))
            .length > 0,
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

  // For editor
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const valueGetter = React.useRef();
  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  const [code, setCode] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const linkHandle = (event) => {
    setFileName(event.title);
    setCode(event.code);
  };

  // TODO: Менять содержимое функций от ввода (правильные ref)

  return (
    <div className="App">
      <Header onSearch={onSearch} />
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
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={
                    <Button type="link" onClick={() => linkHandle(item)}>
                      {item.title}
                    </Button>
                  }
                />
                {item.tags.map((x) => {
                  return <Tag color={choose(x)}>{x}</Tag>;
                })}
              </List.Item>
            )}
          />
        </Col>

        <Col span={15}>
          {fileName === '' ? (
            <Row justify="center" align="middle" style={{ height: '70vh' }}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={<span>Выберите функцию из списка слева</span>}
              />
            </Row>
          ) : (
            <CodeEditor
              name={fileName}
              code={code}
              editorHandler={handleEditorDidMount}
            />
          )}
          {fileName === '' ? (
            <></>
          ) : (
            <div>
              <EditButtons />
              <DeployButtons />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
