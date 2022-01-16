import { Button, Divider, List, Tag } from 'antd';
import React from 'react';

export const FileList = ({ listDataFiltered }) => {
  return (
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
  );
};
