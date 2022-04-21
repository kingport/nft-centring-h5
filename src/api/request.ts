import axios, { AxiosRequestConfig, Method } from "axios";
import envConfig from "@/config";
import { Toast } from "antd-mobile";
import { getHttpStatusText } from "./status";
// import { LoadingElement } from '@/components/loading'
/**
 * 接口返回类型 (根据后端返回的格式定义)
 * @interface ResponseType
 */
export interface ResponseType<T> {
  data: T;
  msg: string;
  code: number;
}

const TIMEOUT = 20000;
const TOAST_DURATION = 2;
const LOADING = {
  en: "Loading...",
  // it: "Caricamento in corso...",
  np: "लोड हुँदैछ...",
  hi: "लोड हो रहा ...",
  ko: "로딩 중...",
  es: "Cargando...",
  pt: "Carregando...",
  // zh: "加載中...",
};
const language = {
  en: "en_US",
  // it: "it_IT",
  np: "ne_NP",
  hi: "hi_IN",
  ko: " ko_KR",
  es: "es_ES",
  pt: "pt_PT",
};
let timerId: any = null;

const initAxios = (loading?: boolean) => {
  const AxiosInstance = axios.create({
    baseURL: envConfig.BASE_URL,
    timeout: TIMEOUT,
    withCredentials: false,
  });

  // request interceptor
  AxiosInstance.interceptors.request.use((config) => {
    if (loading) {
      if (!timerId) {
        timerId = setTimeout(() => {
          Toast.show({
            icon: "loading",
            maskClickable: false,
            content: LOADING[localStorage.getItem("lang") || "en"],
            duration: 0,
          });
        }, 2000);
      }
    }
    // 使用自定义loading
    // if (loading) Toast.loading(LoadingElement, TIMEOUT)
    // 自定义headers
    // if (localStorage.getItem("access_token")) {
    //   alert(1);
    //   config.headers.Authorization = localStorage.getItem("access_token");
    // }
    config.headers = {
      // "content-type": "application/x-www-form-urlencoded",
      // @ts-ignore
      Authorization: localStorage.getItem("access_token"),
      lang: language[localStorage.getItem("lang") || "en"],
    };

    return config;
  });

  // response interceptor
  AxiosInstance.interceptors.response.use(
    (response) => {
      Toast.clear();
      if (response && response.status && response.status !== 200) {
        Toast.show(getHttpStatusText(response.status));
        return Promise.reject(response || "error");
      } else {
        return Promise.resolve(response);
      }
    },
    (error) => {
      
      Toast.clear();
      Toast.show(error.message)
      if(error.code) {
        Toast.show(getHttpStatusText(error.code, null));
      }else if(error.message) {
        Toast.show(getHttpStatusText(null,{message: error.message}));
      }
      return Promise.reject(error);
    }
  );

  return AxiosInstance;
};

/**
 * 封装request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @param {boolean} [loading]
 * @returns {Promise<ResponseType>}
 */
export default function request(
  url: string,
  method: Method,
  data?: {},
  loading?: boolean
): Promise<any> {
  data = Object.assign({}, data);
  const options: AxiosRequestConfig = {
    url,
    method,
    params:
      method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE"
        ? data
        : null,
    data:
      method.toUpperCase() === "POST" || method.toUpperCase() === "PUT"
        ? data
        : null,
  };

  const AxiosInstance = initAxios(loading);
  return new Promise((resolve, reject) => {
    AxiosInstance(options)
      .then((res) => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
          Toast.clear();
        }
        console.log(res, "RES");
        const data = res.data as ResponseType<any>;
        // 这里可以添加和后台的 status 约定
        if (data.code === 1025 || data.code === 1028) {
          Toast.show(res.data.msg);
          localStorage.removeItem("access_token");
          setTimeout(() => {
            window.location.href = "/landing";
          }, 2000);
        }
        resolve(data);
      })
      .catch((err) => {
        // Toast.show(JSON.stringify(err))
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
          Toast.clear();
        }
        reject(err);
      });
  });
}
