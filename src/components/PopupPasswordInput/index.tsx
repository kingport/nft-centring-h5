import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from "react";
import { Mask, NumberKeyboard } from "antd-mobile";
import classNames from "classnames";
// import { api_AccountDetail } from "@/apis/myAccount";
import { FormattedMessage } from "react-intl";
// import { toFixed } from "@/utils/index";
import styles from "./index.module.less";

export interface PassWordTypes {
  setVisible(status: boolean): void;
  setPwd(pwd: string): void;
}

function PopupWindowShow(props, ref) {
  const { goPayCB,balance,amount } = props;
  const [visible, setVisible] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [pwd, setPwd] = useState("");
  const password = useRef("");

  useImperativeHandle(ref, () => ({
    setVisible: (status) => {
      setVisible(status);
    },
    setPwd: (pwd) => {
      setPwd(pwd);
      password.current = pwd;
    },
  }));

  useEffect(() => {
    setKeyboardVisible(visible);
  }, [visible]);

  const actions = {
    onInput: (key: string) => {
      password.current += key;
      setPwd(password.current);
      //输入完毕执行业务事件
      if (password.current.length === 6) {
        goPayCB(password.current);
      }
    },
    onDelete: () => {
      const store = password.current;
      if (store.length > 0) {
        password.current = store.substring(0, store.length - 1);
        setPwd(password.current);
      }
    },
  };
  return (
    <Mask
      visible={visible}
      getContainer={document.body}
      onMaskClick={() => {
        setPwd("");
        setVisible(false);
      }}
    >
      <div className={classNames(styles.popupContainer)}>
        <div
          className={styles.mainContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.content}>
            {/* 请输入交易密码 */}
            <div className={styles.title}>
              {/* 請輸入支付密碼 */}
              <FormattedMessage id="password_input_1" />
            </div>
            <div>
              <div className={styles.payCount}>{amount} IPC</div>
              {/* 可用余额 */}
              {balance !== undefined && <div className={styles.line2}>
                {/* 可用餘額：3242.8102（IPC） */}
                <FormattedMessage id="password_input_2" />
                {balance ||0} (IPC)
              </div>}
            </div>

            <div className={styles.pwdBox}>
              <input
                type="number"
                pattern="\d*"
                defaultValue={pwd}
                autoFocus
                disabled
              />
              <div className={styles.fakeBox}>
                {[...Array(6)].map((e, i) => (
                  <div
                    className={classNames("flex", "flex-c", styles.countInput)}
                    key={i}
                  >
                    {password.current[i] && (
                      <span
                        className={styles.dot}
                        style={{ marginTop: pwd.length - 1 === i ? 0 : "6px" }}
                      >
                        {pwd.length - 1 === i ? pwd.split("")[i] : "*"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <NumberKeyboard
          visible={keyboardVisible}
          onInput={actions.onInput}
          onDelete={actions.onDelete}
          showCloseButton={false}
        />
      </div>
    </Mask>
  );
}

export default forwardRef(PopupWindowShow);
