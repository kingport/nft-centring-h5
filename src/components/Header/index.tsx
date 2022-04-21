import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import IconBack from "@/assets/header/icon_back.svg";
import IconBackWhite from "@/assets/header/icon_back_white.svg";
import IconMoreWhite from "@/assets/header/icon_more_white.svg";
import IconMoreBlack from "@/assets/header/icon_more_black.svg";
import IconCloseWhite from "@/assets/header/icon_close_white.svg";
import IconCloseBlack from "@/assets/header/icon_close_black.svg";

import "./index.less";
/**
 * @prop {string | ReactElement} title  - 标题
 * @prop {string} className             - 类名
 * @prop {string} [background]          - 背景颜色
 * @prop {string} [color]               - 标题字体颜色
 * @prop {string} [rightColor]  - 右侧按钮颜色
 * @prop {boolean} [rightShow]          - 是否显示右侧类容
 * @prop {boolean} [leftShow]           - 是否显示左侧内容
 * @prop {boolean} [transparentTitle]   - 导航栏整体透明设置，true为滑动自适应
 */
export interface HeaderProps {
  title: string | ReactElement;
  className?: string;
  background?: string;
  color?: string;
  leftShow?: boolean;
  rightShow?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  background = "#F8F9FD",
  color = "#000",
  leftShow = true,
  rightShow = true,
}) => {
  const history = useHistory();
  const [textColor, setTextColor] = useState(color);

  const back = () => {
    history.goBack();
  };

  const handleScroll = useCallback(() => {
    const navEle = document.getElementsByClassName("nav")[0];
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      navEle?.setAttribute(
        "style",
        `background: rgba(248,249,253,${scrollTop / navEle.clientHeight})`
      );
      setTextColor("#000");
    } else {
      navEle?.setAttribute("style", `background: ${background}`);
      setTextColor(color);
    }
  }, [background, color]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <div
      className={classNames("nav", classNames)}
      style={{ color: textColor, background }}
    >
      {leftShow && (
        <div className="left">
          <img
            src={textColor === "#fff" ? IconBackWhite : IconBack}
            alt=""
            onClick={back}
          />
        </div>
      )}
      <div className="title">{title}</div>
      {rightShow && (
        <div className="right">
          <div>
            {/* <img
              className="more"
              src={textColor === "#000" ? IconMoreBlack : IconMoreWhite}
              alt=""
            />
            <span></span> */}
            <img
              src={textColor === "#000" ? IconCloseBlack : IconCloseWhite}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
