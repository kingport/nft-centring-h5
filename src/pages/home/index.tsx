import React from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { toFixed } from "@/utils/index";
import Steps from "@/components/Steps/Steps";
import FooterButton from "@/components/FooterButton";
import Header from "@/components/Header";
import IndexApi from "@/api/index";
import styles from "./index.module.less";


function Index() {
  const history = useHistory();

  const [myInfo,setMyInfo] = React.useState<any>()

  /**
   * @description
   * 跳转到购买页面
   */
  const goBuy = () => {
    history.push("/pay");
  };

  /**
   * @description
   * 获取我的质押信息
   */
  const getMyPledg = async() =>  {
    const result = await IndexApi.MyInfo()
    if(result.code === 0) {
      const { data } = result
      setMyInfo(data)
    }
  }

  React.useEffect(() => {
    getMyPledg()
  }, [])

  return (
    <div className={styles.Index}>
      {/* Header */}
      <Header title="" color="#fff" background="transparent" />
      {/* Content */}

      {/* Footer */}
      <FooterButton onClick={goBuy} color="primary" />
    </div>
  );
}

export default Index;
