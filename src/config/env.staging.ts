// 预发布（测试）环境配置
export default {
  ENV_TYPE: "staging",
  // api请求地址
  BASE_URL: window.location.origin,
  // 市场模块测试环境接口地址
  BASE_URL_MARKET: "http://18.163.37.39.nip.io",
} as EnvConfig;
