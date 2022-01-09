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
} from 'antd';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Editor from '@monaco-editor/react';
import 'antd/dist/antd.css';
import { Header } from './components/header/Header';

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
    },
    {
      id: 3,
      href: 'https://ant.design',
      title: `TestDownloadCSV.cpp`,
      tags: ['csv', 'js', 'test'],
    },
    {
      id: 4,
      href: 'https://ant.design',
      title: `TestReportAdapter.ts`,
      tags: ['report', 'ts', 'test'],
    },
    {
      id: 5,
      href: 'https://ant.design',
      title: `ParseHTMLSource.ts`,
      tags: ['HTML', 'ts', 'parser'],
    },
    {
      id: 6,
      href: 'https://ant.design',
      title: `GetEveryCount.ts`,
      tags: ['count', 'ts'],
    },
    {
      id: 7,
      href: 'https://ant.design',
      title: `SimulateUploadCount.ts`,
      tags: ['count', 'ts', 'upload'],
    },
    {
      id: 8,
      href: 'https://ant.design',
      title: `AdapterUserScoreTest.ts`,
      tags: ['adapter', 'ts', 'test'],
    },
    {
      id: 9,
      href: 'https://ant.design',
      title: `AdapterReportCsvCounterData.js`,
      tags: ['adapter', 'js', 'test'],
    },
    {
      id: 10,
      href: 'https://ant.design',
      title: `TestUserRating.ts`,
      tags: ['adapter', 'js'],
    },
    {
      id: 11,
      href: 'https://ant.design',
      title: `IntegrationDtoDescription.ts`,
      tags: ['js'],
    },
    {
      id: 12,
      href: 'https://ant.design',
      title: `ScoreCsvCounter.ts`,
      tags: ['user', 'test'],
    },
    {
      id: 13,
      href: 'https://ant.design',
      title: `AnswerUsersCount.ts`,
      tags: ['user', 'js'],
    },
    {
      id: 14,
      href: 'https://ant.design',
      title: `UsersFriendsCount.ts`,
      tags: ['adapter', 'ts'],
    },
    {
      id: 15,
      href: 'https://ant.design',
      title: `UsersFunctionsDtoCount.ts`,
      tags: ['test'],
    },
    {
      id: 16,
      href: 'https://ant.design',
      title: `Main.ts`,
      tags: ['js'],
    },
    {
      id: 17,
      href: 'https://ant.design',
      title: `CreateNewDtoUser.ts`,
      tags: ['user'],
    },
    {
      id: 18,
      href: 'https://ant.design',
      title: `CreateUserFriend.ts`,
      tags: ['adapter'],
    },
    {
      id: 19,
      href: 'https://ant.design',
      title: `CreateDataFactory.ts`,
      tags: ['test'],
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
      console.log(res);
      setListDataFiltered(res);
    }
  };

  function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  const colors = ['green', 'red', 'cyan', 'blue', 'magenta', 'geekblue'];

  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const valueGetter = React.useRef();
  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }
  const code2 = `
    function helloWorld() {
      console.log('hello world');
    }
  `;

  const [code, setCode] = React.useState(`
    export class FunctionController {
    constructor(private readonly fnService: FunctionService) {}

    @Get()
    getAll() {
      return this.fnService.getAllFn();
    }

    @Get(':id')
    getOne(@Param() id: string) {
      return this.fnService.getOneFn(id);
    }

    @Post()
    createFn(@Body() body: any) {
      return this.fnService.createFn(body);
    }

    @Put(':id')
    updateFn(@Param() id: string, @Body() body: any) {
      return this.fnService.updateFn(id, body);
    }

    @Delete(':id')
    deleteFn(@Param() id: string) {
      return this.fnService.deleteFn(id);
    }

    @Post()
    createFn(@Body() body: any) {
      return this.fnService.createFn(body);
    }

    @Put(':id')
    updateFn(@Param() id: string, @Body() body: any) {
      return this.fnService.updateFn(id, body);
    }

    @Delete(':id')
    deleteFn(@Param() id: string) {
      return this.fnService.deleteFn(id);
    }
  }`);

  // TODO: Менять содержимое функций от ввода (правильные ref)
  // TODO: Добавить создание новой функции
  // TODO: Поиск по тегам

  const success = () => {
    message.success('Success deploy!');
  };

  const error = () => {
    message.error('On deploy has errors, please see console for detail');
  };

  const [isLoading3, setIsLoading3] = React.useState(false);
  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);

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
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 15,
            }}
            bordered
            dataSource={listDataFiltered}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
                {item.tags.map((x) => {
                  return <Tag color={choose(colors)}>{x}</Tag>;
                })}
              </List.Item>
            )}
          />
        </Col>

        <Col span={15}>
          <h3 style={{ marginLeft: '2em' }}>ReportBuilder.ts</h3>
          <Editor
            height="80vh"
            language="typescript"
            value={code}
            editorDidMount={handleEditorDidMount}
          />
          <div className="deploy-buttons-group" style={{ margin: '10px' }}>
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
        </Col>
      </Row>
    </div>
  );
}
