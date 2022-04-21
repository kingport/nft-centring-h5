import request from "./request";

interface InfoListItem {
  name: string;
  desc: string;
}
// 公告
export interface NoticeData {
  id: string;
  key: string;
  value: string;
  remark: string;
  last_update_time: string;
}

export interface OrderPlaceData {
  code: number;
  msg: string;
}

export interface AcccountIPCDatum {
  balance: number;
  balance_as_usdt: number;
  created: string;
  currency: string;
  deposited: number;
  hold: number;
  id: number;
  last_update_time: string;
  sort: number;
  user_id: number;
  withdrawal: number;
}

export interface AcccountIPCObject {
  code: number;
  data: AcccountIPCDatum[];
  msg: string;
}


class IndexApi {
  /**
   * @description
   * 我的质押信息
   */
  static MyInfo = (params={}): Promise<any> => request("/mapi/pledge/my", "GET", params, true);

  /**
   * @description
   * 近7天的收益率
   */
  static LiquidityTrend = (params={period: 'LAST_7_DAYS'}): Promise<any> => request("/mapi/liquidity/trend", "GET", params, true);

  /**
   * @description
   * 质押动账记录
   */
   static LiquidityBill = (params): Promise<any> => request("/mapi/liquidity/bill", "GET", params, true);

   /**
    * @description
    * 合约动账记录
    */
    static ContractBill = (params): Promise<any> => request("/mapi/contract/bill", "GET", params, true);
    
  /**
   * @description
   * 获取收益明细
   */
  static LiquidityEarnings = (params): Promise<any> => request("/mapi/liquidity/pledge_earnings", "GET", params, true);

  /**
   * @description
   * 购买矿机
   */
  static OrdersPlace = (params):Promise<OrderPlaceData> => request("/mapi/orders/place", "POST", params,false)
  
  /**
   * @description
   * 获取IPC可用余额
   */
  static AcccountIPC = (params): Promise<AcccountIPCObject> => request("/account/pageAccount","GET",params,true)

  /**
   * @description
   * 赎回
   */
  static Redeem = (params): Promise<any> => request("/mapi/pledge/redeem","POST", params,false)
}

export default IndexApi;
