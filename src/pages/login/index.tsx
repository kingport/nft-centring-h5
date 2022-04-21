import React, { useRef } from "react";
import { Button } from "antd-mobile";
import { FormattedMessage } from "react-intl";

import LoginModal, { LoginModalTypes } from "./components/LoginModal";
import logo from "@/assets/logo.svg";

import styles from "./index.module.less";

function Login() {
  const LoginModalRef = useRef<LoginModalTypes | null>();
  return (
    <div className={styles.login}>
      <img src={logo} alt="" />
      <h1>
        <FormattedMessage id="login_intro" />
      </h1>
      <p>
        <FormattedMessage id="login_desc" />
      </p>
      <div className={styles.btnWrap}>
        <Button
          block
          className={styles.btn}
          onClick={() => LoginModalRef.current?.setVisible(true)}
          color="primary"
        >
          <FormattedMessage id="login_btn" />
        </Button>
      </div>
      <LoginModal ref={LoginModalRef} />
    </div>
  );
}

export default Login;
