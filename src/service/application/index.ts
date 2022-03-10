import { IGETApplicationFormRes } from './types';
import http from '@/client';
import { ApplicationValue } from '@/pages/application/pages/application-form';

export type HandleApplicationFormType = 'submit' | 'save';

/**
 * 申请表单 保存 | 提交
 */
export const postApplicationForm = (type: HandleApplicationFormType, formValue: ApplicationValue) => {
  if (type === 'save') {
    return http.post('/application/form/save', formValue);
  } else {
    return http.post('/application/form/submit', formValue);
  }
};


export const getApplicationForm = (applyId: number) => {
  return http.get<IGETApplicationFormRes>(`/application/form/${applyId}`);
};