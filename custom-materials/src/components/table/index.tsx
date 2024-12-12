import React, { createElement } from 'react';
import { Table as OriginalTable } from '@alifd/next';

const Table: React.FC = (props: any) => {
  const columns = (props.columns || []).filter((item: any) => !item?.hidden);

  return <OriginalTable {...props} columns={columns} />;
};

export default Table;
