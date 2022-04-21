import IndexApi from "@/api/index";
import { InfiniteScroll } from "antd-mobile";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from 'react-intl';

const List = (props) => {
  const { listItem, data = [], type } = props;
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(20);
  const [listData, setlistData] = useState<any>([]);

  /**
   * @description
   * 获取收益明细
   */
  const getEaringList = useCallback(async() => {
   return await IndexApi.LiquidityEarnings({
      size,
      current
    })
    
  }, [current, size])

  /**
   * @description
   * 获取动账记录
   */
  const getLiquidityBill = useCallback(async() => {
    return await IndexApi.LiquidityBill({
      size,
      current
    })
  }, [current,size])

  /**
   * @description
   * 获取合约动账记录
   */
  const getContractBill = useCallback(async() => {
    return await IndexApi.ContractBill({
      size,
      current
    })
  }, [current,size])


  // 下拉加载更多
  async function loadMore() {
    let res: any = {}
    if(type === 'bill') {
      res = await getLiquidityBill()
    }
    if(type === 'earnings') {
      res = await getEaringList()
    }
    if(type === "contract") {
      res = await getContractBill()
    }
    const { data } = res
    setlistData((list) => [...list, ...data.records])
    setHasMore(listData.length > 0)    
  }

  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return (
      <>
        {hasMore ? (
          <>
            <span><FormattedMessage id="text_loading"/></span>
          </>
        ) : (
          <span><FormattedMessage id="text_no_more"/></span>
        )}
      </>
    )
  }


  return (
    <>
      <div className="list">
        {listData.map((item, index) => {
          return listItem(item, index);
        })}
      </div>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />       
      </InfiniteScroll>
    </>
  );
};

export default List;
