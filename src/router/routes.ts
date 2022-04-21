import { lazy } from "react";

// 登录
// const Login = lazy(
//   () => import(/* webpackChunkName: "Login" */ "@/pages/Login/index")
// );
const Home = lazy(
  () => import(/* webpackChunkName: "Index" */ "@/pages/home/index")
);

export interface RouteConfig {
  path: string;
  component?: any;
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  { path: "/home", component: Home, exact: true },
];
