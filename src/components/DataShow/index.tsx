import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { Popup } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";

import { dateFormat } from "@/utils";

import styles from "./index.module.less";
// ？跳转页面需要的参数
export interface DataList {
  date: string;
  value: number | string;
  orderId?: number | string;
  settle_date?: string;
  status?: number;
}
export interface DataShowTypes {
  setVisible(status: boolean): void;
  setData(data: DataList[]): void;
  setTypes(type: string): void;
}

const DataShow = (_, ref) => {
  const history = useHistory();
  const [listData, setListData] = useState<DataList[]>();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("T");
  useImperativeHandle(ref, () => ({
    setVisible: (status: boolean): void => {
      setVisible(status);
    },
    setData: async (data: DataList[]) => {
      // 获取数据来源
      setListData(data);
    },
    setTypes: (type: string) => {
      setType(type.toLocaleUpperCase());
    },
  }));

  const goExchangeDetail = (e, item) => {
    e.preventDefault();
    if (item.orderId) {
      history.push({
        pathname: "/profit",
        state: {
          status: item.status || 2,
          orderId: item.orderId,
          settle_date: item.settle_date,
        },
      });
    }
    // history.push({
    //   pathname: `/profit`,
    //   state: `2021-${item.time}`,
    //   status: item.status || 2,
    //   orderId: item.id,
    // });
  };

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
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
            "flex-a-c",
            "flex-j-b",
            styles.popupHeader
          )}
        >
          <LeftOutline
            onClick={() => {
              setVisible(false);
            }}
          />
          <span>
            <FormattedMessage id="text_popup_data_title" />
          </span>
          <span></span>
        </div>
        <div className={styles.popupContent}>
          {listData?.map((item, index) => {
            return (
              <p
                className={classNames("flex", "flex-a-c", "flex-j-b")}
                key={index}
                onClick={(e) => goExchangeDetail(e, item)}
              >
                <span>{dateFormat(item.date, "MM-dd")}</span>
                <span>
                  {item.value} {type}
                </span>
              </p>
            );
          })}
        </div>
      </div>
    </Popup>
  );
};

export default forwardRef(DataShow);
