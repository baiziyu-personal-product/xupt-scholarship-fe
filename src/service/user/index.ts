import { CompleteUserInfoValue } from '@/components/update-user-info';
import http from '@/client'

export interface IUserItem {
  avatar: string;
  email: string;
  name: string;
  en: string;
}
/**
 * 获取提及用户列表
 */
export const getMentionUserList = () => {
  return http.get<IUserItem[]>("/user/list");
}

export type IBaseUserInfo = IUser;

export const getUserInfo = () => {
  return  http.get<IBaseUserInfo>("/user");
}

export const postUpdateUserInfo = (data: CompleteUserInfoValue) => {
  return http.post<number>("/user/update/user/info", data)
}