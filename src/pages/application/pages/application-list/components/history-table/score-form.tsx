import { Button, Form, FormInstance, FormProps, InputNumber, message, Space, Statistic } from 'antd';
import * as React from 'react';
import style from "../../style.module.less";
import * as api from '@/service/apply';
import { useAuth } from '@/context/auth.context';

type ScoreValue = api.ScoreValue;

interface IProps {
  applyId: number;
  initValue?: ScoreValue
  submitCallBack?: () => void;
  scoreFormRef?: FormInstance<api.ScoreValue>;
}

const ScoreFormList: {
  type: "base" | "moral" | "practice" | "academic" | "sum";
  name: string;
}[] = [{
  type: 'base',
  name: "学业课成绩",
}, {
  type: "moral",
  name: "思想品德分数",
}, {
  type: "practice",
  name: "实践活动分数"
}, {
  type: "academic",
  name: "学术分数",
}, {
  type: "sum",
  name: "总和"
}]

const ScoreForm: React.FC<IProps> = (props) => {
  const { user } = useAuth();
  const { initValue, applyId, submitCallBack, scoreFormRef } = props;
  const [sumValue, setSumValue] = React.useState(initValue?.sum);
  const [loading, setLoading] = React.useState(false);
  const updateScore = (values: any) => {
    delete values.sum
    const sum = (Object.values(values) as number[]).reduce((p, c) => (p += (+c), p), 0);
    setSumValue(sum);
  }
  const onValuesChange: FormProps['onValuesChange'] = (_, values) => {
    updateScore(values);
  }
  let [formRef] = Form.useForm<ScoreValue>();
  formRef = scoreFormRef || formRef;

  const submitForm = async () => {
    const value = formRef.getFieldsValue(true) as ScoreValue;
    try {
      setLoading(true);
      await api.postApplicationScoreList(applyId, {
        ...value,
        sum: sumValue!,
      });
      submitCallBack && await submitCallBack();
      message.success("评定成功");
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const formValue = React.useMemo(() => ({
    ...initValue,
    base: user.course,
  }), [user.course, initValue]);

  React.useEffect(() => {
    if (initValue) {
      formRef.setFieldsValue(formValue);
      updateScore(formValue);
    }
  }, [formValue]);

  return (
    <Form
      className={style["score-form"]}
      layout="inline"
      form={formRef}
      onValuesChange={onValuesChange}
      initialValues={initValue}
    >
      <Space align="center">
        {
          ScoreFormList.map(item => (
            <React.Fragment key={item.type}>
              <div className={style["score-form-item"]}>
                {
                  item.type === "sum" ? (
                    <Statistic
                      valueStyle={{
                        fontSize: 20
                      }}
                      key="score"
                      title="总分"
                      value={sumValue}
                    />
                  ) : (
                      <React.Fragment>
                        <div className={style["form-top-label"]}>{item.name}</div>
                        <Form.Item
                          name={item.type}
                        >
                          <InputNumber
                            min={0}
                            disabled={loading || item.type === 'base'}
                          />
                        </Form.Item>
                      </React.Fragment>
                    )
                }
              </div>
              {
                item.type !== "sum" && (
                  <span className={style["compute-icon"]}>
                    {item.type === "academic" ? " = " : " + "}
                  </span>
                )
              }
            </React.Fragment>
          ))
        }
      </Space>
      { !scoreFormRef && (
        <Form.Item>
          <Button onClick={submitForm} loading={loading} type="primary">确认分数并提交</Button>
        </Form.Item>
      )
      }
    </Form >
  );
}

ScoreForm.defaultProps = {
  initValue: {
    moral: 0,
    practice: 0,
    academic: 0,
    sum: 0,
    base: 0,
  }
}

export default ScoreForm;