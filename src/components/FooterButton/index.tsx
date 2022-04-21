import React from "react";
import { Button } from 'antd-mobile';
import { useIntl } from "react-intl";
import styles from "./index.module.less";

const FooterButton = (props) => {
  const intl = useIntl();
  const { text = intl.formatMessage({ id: "index_buy_btn" }) } = props;  
  return (
    <div className={styles.footer}>
      <Button {...props} className={styles.footerBtn} >
        {text}
      </Button>
    </div>
  );
};

export default FooterButton;
