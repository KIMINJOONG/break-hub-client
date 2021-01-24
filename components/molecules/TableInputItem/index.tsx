import React, { useCallback, useState } from 'react';
import { IProps } from './type';
import Input from '../../atoms/Input';
import Td from '../../atoms/Td';

const TableInputItem = ({ id, name, itemValue }: IProps) => {
  const [value, setValue] = useState(itemValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <Td>
      <Input id={id} name={name} onChange={onChange} value={value} />
    </Td>
  );
};

export default TableInputItem;
