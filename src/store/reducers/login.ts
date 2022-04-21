import {
  LOGIN,
  LOGOUT,
  NEWCOMER_GUIDE,
  VERSION_GUIDE,
} from "@/constants/index";

const INITIAL_STATE = {
  isLogin: false,
  newcomerGuide: false,
  versionGuide: false,
};

export default function login(
  state = INITIAL_STATE,
  action: { type: string; value: any }
) {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
      };
    case LOGOUT:
      return {
        isLogin: false,
      };
    case NEWCOMER_GUIDE:
      console.log("state", state);
      console.log("action", action);

      return {
        ...state,
        newcomerGuide: action.value,
      };
    case VERSION_GUIDE:
      console.log("state", state);
      console.log("action", action);

      return {
        ...state,
        versionGuide: action.value,
      };
    default:
      return state;
  }
}
