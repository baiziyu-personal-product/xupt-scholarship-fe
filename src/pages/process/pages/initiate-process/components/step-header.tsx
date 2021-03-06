import { useStepContext } from '@/pages/process/pages/initiate-process/context/step';
import { Steps } from 'antd';
import * as React from 'react';
import style from '../style.module.less'
const { Step } = Steps;

const StepHeader: React.FC = () => {
  const { step } = useStepContext();
  return (
    <Steps
      current={step.index}
      className={style['steps-page-header']}
    >
      <Step
        title="发起奖学金评定流程"
      ></Step>
      <Step
        title="上传相关公开文件"
      />
      <Step title="确认发起流程"></Step>
    </Steps>
  )
}

export default StepHeader;