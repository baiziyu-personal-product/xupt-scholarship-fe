/**
 * 出版专著量化分表单
 */
import { FormItemProps, Form, Select, Input, DatePicker, InputNumber, Space, DatePickerProps } from 'antd';
import * as C from '../../../config/academic.config';
import * as React from 'react';
import { disabledFormCurrentDate, requiredRule } from '@/config/form';
import FormListSkeleton from '../../form-list-skeleton';
import { UploadFile } from 'antd/lib/upload/interface';
import UploadDragger from '@/components/upload-file';
import { FORMAT_DATE } from '@/config/time';
import FmtDatePicker from '@/components/fmt-date-picker';

interface IProps extends FormItemProps {

}

export interface PublishFormValue {
  level: C.PublishScoreItem['level'];
  name: string;
  time: DatePickerProps['value'];
  publish_house_name: string;
  fonts_count: number;
  files: UploadFile[];
}

export const publishDefaultFormValue: PublishFormValue = {
  level: 'authoritative_press',
  name: '',
  time: FORMAT_DATE,
  fonts_count: 1,
  publish_house_name: '',
  files: []
};

const PublishForm: React.FC<IProps> = (props) => {

  const scientificOptions = React.useMemo(() => C.publishScoreList.map(item => ({
    label: `${item.title} 『${item.score}分/万字』`,
    value: item.level,
    score: item.score
  })), []);

  return (
    <FormListSkeleton
      title="出版专著"
      name="publish"
      itemTitle="专著"
      listId="academic-form-publish"
      alertMessage={
        [
          '以西安邮电大学为第一署名单位，参与出版本学科专著、教材、编著或者译著 1 部',
          '出版社级别以西邮党发〔2018〕14 号文件为准',
          '本人承担字数不足 1 万字的计分为 0，超过 1 万字的以整数倍计算分数',
          '在书中必须注明个人工作量'
        ]
      }
    >
      {
        (field) => (
          <React.Fragment>
            <Form.Item
              label="出版社级别"
              name={[field.name, "level"]}
              rules={requiredRule}
            >
              <Select
                options={scientificOptions}
              />
            </Form.Item>
            <Form.Item
              label="出版社名称"
              name={[field.name, "publish_house_name"]}
              rules={requiredRule}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="专著名称"
              name={[field.name, "name"]}
              rules={requiredRule}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="出版时间"
            >
              <Space>
                <Form.Item
                  noStyle
                  name={[field.name, "time"]}
                  rules={requiredRule}
                >
                  <FmtDatePicker
                    disabledDate={disabledFormCurrentDate}
                  />
                </Form.Item>
                <Form.Item
                  name={[field.name, "fonts_count"]}
                  rules={requiredRule}
                  noStyle
                >
                  <InputNumber
                    addonBefore="承担字数"
                    addonAfter="万字"
                    min={1}
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <UploadDragger
              formProps={{
                label: "文件",
                name: [field.name, "files"]
              }}
            />
          </React.Fragment>
        )
      }
    </FormListSkeleton>
  )
};

export default PublishForm;