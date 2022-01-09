import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { EditableTagGroup } from '../tagsEditor/TagsEditor';

const { Option } = Select;

export const NewFunction = ({ submitHandler }): JSX.Element => {
  const [form] = Form.useForm();

  const [tags, setTags] = React.useState([]);

  const languages = [
    'javascript',
    'python',
    'typescript',
    'java',
    'ruby',
    'golang',
  ];

  return (
    <Form form={form} name="control-hooks" onFinish={submitHandler}>
      <Form.Item name="title" label="Имя функции" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="language"
        label="Язык программирования"
        rules={[{ required: true }]}
      >
        <Select placeholder="Select your functions language">
          {languages.map((x) => (
            <Option key={x} value={x}>
              {x}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="code"
        label="Исходный код функции"
        rules={[{ required: true }]}
      >
        <TextArea style={{ height: 150 }} />
      </Form.Item>
      <Form.Item name="tags" label="Теги">
        <EditableTagGroup tags={tags} onChange={setTags} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Создать функцию
        </Button>
      </Form.Item>
    </Form>
  );
};
