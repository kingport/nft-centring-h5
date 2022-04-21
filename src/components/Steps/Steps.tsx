import React from "react";
import styles from "./steps.module.less";
import { FormattedMessage } from "react-intl";
import { addDays, dateFormat } from '@/utils';
// import { RULE_1, RULE_2, RULE_2_TITLE, RULE_3, RULE_3_TITLE, RULE_4, RULE_4_TITLE } from "../../pages/Index/Rule";

const Steps = () => {
  return (
    <>
      <div className={styles.Steps}>
        <div className={styles.Step}>
          <div className={styles.StepIndicator}>
            <div className={styles.StepIndicatorDate}>{dateFormat(new Date(),'yyyy-MM-dd')}</div>
            <span className={styles.StepDot}></span>
            <div className={styles.StepIndicatorTip}>
              {/* 认购 */}
              <FormattedMessage id="index_15" />
            </div>
          </div>
        </div>
        <div className={styles.Step}>
          <div className={styles.StepIndicator}>
            <div
              style={{ textAlign: "center" }}
              className={styles.StepIndicatorDate}
            >
              {dateFormat(new Date(),'yyyy-MM-dd')}
            </div>
            <span style={{ left: "50%" }} className={styles.StepDot}></span>
            <div
              style={{ textAlign: "center" }}
              className={styles.StepIndicatorTip}
            >
              {/* 生效 */}
              <FormattedMessage id="index_16" />
            </div>
          </div>
        </div>
        <div className={styles.Step}>
          <div className={styles.StepIndicator}>
            <div className={styles.StepIndicatorDate}>{dateFormat(addDays(new Date(),1),'yyyy-MM-dd')}</div>
            <span className={styles.StepDot}></span>
            <div className={styles.StepIndicatorTip}>
              {/* 首笔资金 */}
              <FormattedMessage id="index_17" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
