export default [
  {
    title: '表格',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'Table',
      props: {
        dataSource: [
          {
            id: '1',
            name: 'Julia',
            age: 32,
            address: 'CN',
          },
          {
            id: '2',
            name: 'Kevin',
            age: 28,
            address: 'Ko',
          },
          {
            id: '3',
            name: 'Ashely',
            age: 32,
            address: 'UK',
          },
          {
            id: '4',
            name: 'Bob',
            age: 28,
            address: 'US',
          },
          {
            id: '5',
            name: 'Oven',
            age: 32,
            address: 'Aus',
          },
          {
            id: '6',
            name: 'Jack',
            age: 28,
            address: 'Ire',
          },
        ],
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
        ],
        rowKey: 'id',
        pagination: {
          pageSize: 10,
          total: 15,
          current: 1,
        },
      },
    },
  },
];
