import http from '@/client';

interface IBaseFormValue {
  email: string;
  password: string;
}

export interface ILoginFormValue extends IBaseFormValue {
}

/**
 * 用户登录
 * @param params 登录表单信息
 */
export const postLogin = function (params: ILoginFormValue) {
  return http.post<string>("/sign/login", params);
}


export interface IRegisterFormValue extends IBaseFormValue {
  confirm_password: string;
  identity: IUser['identity'];
}

/**
 * 注册用户
 * @param params 注册表单信息
 */
export const postRegister = function (params: IRegisterFormValue) {
  return http.post<string>("/sign/register", params);
}

export const getSignOut = function () {
  return http.get("/sign/out");
}