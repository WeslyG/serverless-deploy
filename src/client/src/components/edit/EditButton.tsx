import { Button, Form, Input, Modal, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { EditableTagGroup } from '../tagsEditor/TagsEditor';

const { Option } = Select;

export const EditForm = ({
  editSubmitHandler,
  data,
  deleteHandler,
}): JSX.Element => {
  const [form] = Form.useForm();

  const [state, setState] = React.useState(data);
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
    <Form form={form} name="edit-form" onFinish={editSubmitHandler}>
      <Form.Item name="title" label="Имя функции" rules={[{ required: true }]}>
        <Input defaultValue={state.title} value={state.title} />
      </Form.Item>
      <Form.Item
        name="language"
        label="Язык программирования"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select your functions language"
          value={state.language}
          defaultValue={state.language}
        >
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
        <TextArea
          style={{ height: 150 }}
          value={state.code}
          defaultValue={state.code}
        />
      </Form.Item>
      <Form.Item name="tags" label="Теги">
        <EditableTagGroup tags={state.tags} onChange={setTags} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          style={{ margin: '10px' }}
        >
          Редактировать функцию
        </Button>
        <Button danger block onClick={deleteHandler} style={{ margin: '10px' }}>
          Удалить функцию
        </Button>
      </Form.Item>
    </Form>
  );
};

export const EditButtons = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteHandler = () => {
    console.log('deleted');
  };

  const editSubmitHandler = () => {
    console.log('editSubmitHandler');
  };

  return (
    <div className="edit-buttons" style={{ display: 'inline-block' }}>
      <Button onClick={showModal}>Редактировать</Button>
      <Modal
        title="Редактирование функции"
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        width={600}
        footer={[]}
      >
        <EditForm
          data={data}
          deleteHandler={deleteHandler}
          editSubmitHandler={editSubmitHandler}
        />
      </Modal>
    </div>
  );
};
