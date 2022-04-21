import { LOGIN, LOGOUT, NEWCOMER_GUIDE, VERSION_GUIDE } from "@/constants";
// import { getAppUserInfo } from '@/utils/login'
import { setAppUserInfo } from "@/store/actions/user";

export const login = () => {
  return {
    type: LOGIN,
  };
};
// 退出登录
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// 登录异步action
export const setLoginIn = () => {
  return (dispatch) => {
    // 模拟异步action
    setTimeout(() => {
      dispatch(login());
      const info: AppUserInfo = {
        userId: "123456",
        nickName: "nickname",
        sex: 2,
      };
      dispatch(setAppUserInfo(info));
    }, 1000);
  };
};

// 新手引导
export const setNewcomerGuide = (value) => {
  return {
    type: NEWCOMER_GUIDE,
    value,
  };
};
// 新版本引导
export const setVersionGuide = (value) => {
  return {
    type: VERSION_GUIDE,
    value,
  };
};
