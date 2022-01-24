/**
 * 登录注册表单组件
 */
import * as React from 'react';
import * as ahooks from 'ahooks';
import { Form, Input, Checkbox, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import * as sign from '@/service/sign';

import style from './sign-form.module.less';


export interface ISignFormProps {
  type: 'login' | 'register';
  setLoading: (status: boolean) => void;
}

const LoginInitValue: sign.ILoginFormValue = {
  sign_id: '12131413@ss.com',
  password: 'sss@@ss@@112AA',
  remember: false,
};

const RegisterInitValue: sign.IRegisterFormValue = {
  sign_id: '',
  password: '',
  confirm_password: '',
};

const SignForm: React.FC<ISignFormProps> = (props) => {
  const { type, setLoading } = props;
  const [form] = Form.useForm();

  const { run: submitForm } = ahooks.useDebounceFn(async () => {
    await form.validateFields();
    try {
      const formValue = form.getFieldsValue(true);
      setLoading(true);
      if (type === 'login') {
        await sign.postLogin(formValue);
      } else {
        await sign.postRegister(formValue);
      }
    } catch (error) {
      message.error("登陆失败");
    } finally {
      setLoading(false);
    }
  }, {
    wait: 500
  });

  const formInfo = type === 'login' ? {
    submitText: "登录",
    submitTextEN: "Login",
    initValue: LoginInitValue
  } : {
      submitTextEN: "Register",
      submitText: "注册",
      initValue: RegisterInitValue
    };

  return (
    <div className={style['sign-form']}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        initialValues={formInfo.initValue}
      >
        <Form.Item
          label="邮箱"
          name="sign_id"
          required
          hasFeedback
          rules={[{
            type: "email",
            required: true,
            message: "请输入正确的邮箱格式"
          }]}
        >
          <Input
            placeholder="请输入您的邮箱"
          />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          hasFeedback
          required
          rules={[{
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
            required: true,
            message: '密码长度需为8-16位，且最少包含一个大写字母，一个小写字母以及一个数字',
          },]}
        >
          <Input.Password
            placeholder="请输入您的密码"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        {
          type === 'login' && (
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 6, span: 12 }}
            >
              <Checkbox>下次登录的时候记住我</Checkbox>
            </Form.Item>
          )
        }
        {
          type === 'register' && (
            <Form.Item
              name="confirm_password"
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "确认密码不能为空！！！",
                },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message: '密码为八位以上大小写字母和数字的组合',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('确认密码和密码不一致！'));
                  },
                }),
              ]}
              required
            >
              <Input.Password
                placeholder="请再次输入您的密码"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
          )
        }
        <Form.Item
          wrapperCol={{ offset: 10, span: 12 }}
        >
          <button
            onClick={submitForm}
            className="custom-btn btn-12"
          >
            <span>{formInfo.submitTextEN}</span>
            <span>{formInfo.submitText}</span>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

SignForm.defaultProps = {
  type: 'login'
}

export default SignForm;

