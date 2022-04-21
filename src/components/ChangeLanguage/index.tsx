import React, { forwardRef, useImperativeHandle, useState } from "react";
import classNames from "classnames";
import { Popup } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";
import { FormattedMessage } from "react-intl";
import { languages } from "@/utils";

// import IconRadio from "@/assets/icon_radio.svg";
// import IconRadioActive from "@/assets/icon_radio_active.svg";

import styles from "./index.module.less";

const language = localStorage.getItem("lang");

export interface ChangeLanguageTypes {
  setVisible(status: boolean): void;
}
const ChangeLanguage = (_, ref) => {
  const languageList = ["en", "np", "hi", "ko", "es", "pt"];
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState(language);

  useImperativeHandle(ref, () => ({
    setVisible: (status: boolean): void => {
      setVisible(status);
    },
  }));

  const selectLanguage = (val: string) => {
    setLang(val);
    localStorage.setItem("lang", val);
    window.location.reload();
  };

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      className={styles.popupContainer}
      position="bottom"
      bodyStyle={{
        borderTopLeftRadius: "0.3rem",
        borderTopRightRadius: "0.3rem",
        minHeight: "80vh",
      }}
    >
      <div className={styles.popupContainer}>
        <div
          className={classNames(
            "flex",
            "flex-j-b",
            "flex-a-c",
            styles.popupHeader
          )}
        >
          <span onClick={() => setVisible(false)}>
            <LeftOutline />
          </span>
          <FormattedMessage id="text_select_lang" />
          <span></span>
        </div>
        <div className={classNames("hiddenScroll", styles.popupContent)}>
          {languageList.map((l) => {
            return (
              <div
                className={classNames(
                  "flex",
                  "flex-j-b",
                  "flex-a-c",
                  styles.selectLang
                )}
                key={l}
                onClick={() => {
                  selectLanguage(l);
                }}
              >
                <span>{languages[l]}</span>
                {/* <img src={lang === l ? IconRadioActive : IconRadio} alt="" /> */}
              </div>
            );
          })}
        </div>

        {/* <div
          className={classNames(
            "flex",
            "flex-j-b",
            "flex-a-c",
            styles.selectLang
          )}
          onClick={() => {
            selectLanguage("en");
          }}
        >
          <span>English</span>
          <img src={lang === "en" ? IconRadioActive : IconRadio} alt="" />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-j-b",
            "flex-a-c",
            styles.selectLang
          )}
          onClick={() => {
            selectLanguage("zh");
          }}
        >
          <span>中文</span>
          <img src={lang === "zh" ? IconRadioActive : IconRadio} alt="" />
        </div> */}
      </div>
    </Popup>
  );
};

export default forwardRef(ChangeLanguage);
