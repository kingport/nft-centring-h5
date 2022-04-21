/* 环境变量 */
type EnvConfig = {
  ENV_TYPE: "dev" | "staging" | "production";
  BASE_URL: string;
  BASE_URL_MARKET: string;
};

/* 用户数据 */
type AppUserInfo = {
  userId: string;
  nickName: string;
  sex: 0 | 1 | 2;
};

type AppLoginInfo = {
  isLogin: boolean;
  newcomerGuide: boolean;
  versionGuide: boolean;
};
