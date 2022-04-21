import React, { useImperativeHandle, useState, forwardRef } from "react";
import { useHistory } from 'react-router-dom';
import classNames from "classnames";
import { Button, Popup } from "antd-mobile";
import { FormattedMessage } from "react-intl";

import styles from "./index.module.less";
import logo from "@/assets/logo.svg";
import IPC from "@/assets/IPC.svg";
export interface LoginModalTypes {
  setVisible(visible: boolean);
}

const LoginModal = (_, ref) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    setVisible: (status: boolean): void => {
      setVisible(status);
    },
  }));

  const login = ()=>{
    history.push('/index')
  }
  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      position="bottom"
      bodyStyle={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        minHeight: "348px",
        background: "#F8F9FD",
        boxShadow: "0px 15px 25px rgba(221, 225, 233, 0.15)",
      }}
    >
      <div className={styles.container}>
        <h2 className="flex flex-a-c">
          <span className="flex flex-c">
            <img src={logo} alt="" />
          </span>
          {/* IPC挖矿 申请 */}
          <FormattedMessage id="login_modal_title" />
        </h2>
        <p className={styles.desc}>
          {/* 使用IPCloud账号登录 */}
          <FormattedMessage id="login_modal_1" />
        </p>
        <div className={classNames("flex flex-a-c", styles.email)}>
          <img src={IPC} alt="" />
          123wiruf@gmail.com
        </div>
        <p className={classNames(styles.txt)}>
          {/* 允许后，IPCloud会将您的用户名电子邮件地址和个人资料照片提供给“IPC挖矿”，并同步使用交易密码。 */}
          <FormattedMessage id="login_modal_2" />
        </p>
        <div className={classNames("flex flex-a-c flex-j-b", styles.btnWrap)}>
          <Button className={styles.reject} onClick={()=>setVisible(false)}>
            {/* 拒绝 */}
            <FormattedMessage id="login_modal_4" />
          </Button>
          <Button color="primary" onClick={login}>
            {/* 允许 */}
            <FormattedMessage id="login_modal_3" />
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default forwardRef(LoginModal);
