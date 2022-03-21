import { IGETApplicationFormRes } from './types';
import http from '@/client';
import { ApplicationValue } from '@/pages/application/pages/application-form';
import { IHandleStatus } from '@/pages/application/pages/application-list/components/history-table/interface';

export type HandleApplicationFormType = 'submit' | 'save';

/**
 * 申请表单 保存 | 提交
 */
export const postApplicationForm = (type: HandleApplicationFormType, formValue: ApplicationValue) => {
  return http.post(`/apply/handle/form/${type}`, formValue);
};

export const putApplicationForm = (type: HandleApplicationFormType, formValue: ApplicationValue, id: number) => {
  return http.put(`/apply/${id}/${type}`, formValue);
}


export const getApplicationForm = (applyId: number) => {
  return http.get<IGETApplicationFormRes>(`/apply/${applyId}`);
};

export type ApplicationItem = {
  id: number;
  edit_at: string;
  create_at: string;
  editable: boolean;
  status: IHandleStatus,
}

export const getApplicationList = () => {
  return http.get<ApplicationItem[]>(`/apply/form/list`);
}