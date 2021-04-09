import { Dispatch, SetStateAction } from 'react';
import { searchTag } from '../../../type/server';

export interface IProps {
  isUpdate?: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  titleValue?: string;
  contnetValue?: string;
  videoUrlValue?: string;
  searchTagDatas?: Array<searchTag>;
}
