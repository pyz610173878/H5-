/*
 * @Author: hacker 610173878@qq.com
 * @Date: 2024-03-22 15:52:02
 * @LastEditors: hacker 610173878@qq.com
 * @LastEditTime: 2024-04-12 08:18:42
 * @FilePath: \H5-\src\utils\http\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig
} from "axios";
import { ContentTypeEnum, ResultEnum } from "@/enums/requestEnum";
import NProgress from "../progress";
import { showFailToast } from "vant";
import "vant/es/toast/style";
import { store } from "@/store/index";
import { useCachedViewStore } from "@/store/modules/cachedView";
// const token = '1191D540300D8C0F854AC41E2DF7ED67'; //测试Token

// 在TS 文件中使用 Pinia
const axiosBase = useCachedViewStore(store);

// 默认 axios 实例请求配置
const configDefault = {
  headers: {
    "Content-Type": ContentTypeEnum.FORM_URLENCODED
  },
  timeout: 0,
  baseURL: import.meta.env.VITE_BASE_API,
  data: {}
};

class Http {
  // 当前实例
  private static axiosInstance: AxiosInstance;
  // 请求配置
  private static axiosConfigDefault: AxiosRequestConfig;

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      config => {
        NProgress.start();
        // 发送请求前，可在此携带 token
        if (axiosBase.User_info.qywxToken) {
          config.headers["wx-user-Token"] = axiosBase.User_info.qywxToken;
          console.log("config", config.headers);
        }
        return config;
      },
      (error: AxiosError) => {
        showFailToast(error.message);
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done();
        // 与后端协定的返回字段
        // const { code, message, result } = response.data;
        const { success, errCode, errMessage } = response.data;
        // 判断请求是否成功
        if (success) {
          return response.data;
        }
        // const isSuccess =
        //   result &&
        //   Reflect.has(response.data, "code") &&
        //   code === ResultEnum.SUCCESS;
        // if (isSuccess) {
        //   return result;
        // }
        else {
          // 处理请求错误
          showFailToast(errMessage);
          return Promise.reject(errMessage);
        }
      },
      (error: AxiosError) => {
        NProgress.done();
        // 处理 HTTP 网络错误
        let message = "";
        // HTTP 状态码
        const status = error.response?.status;
        switch (status) {
          case 400:
            message = "请求错误";
            break;
          case 401:
            message = "未授权，请登录";
            break;
          case 403:
            message = "拒绝访问";
            break;
          case 404:
            message = `请求地址出错: ${error.response?.config?.url}`;
            break;
          case 408:
            message = "请求超时";
            break;
          case 500:
            message = "服务器内部错误";
            break;
          case 501:
            message = "服务未实现";
            break;
          case 502:
            message = "网关错误";
            break;
          case 503:
            message = "服务不可用";
            break;
          case 504:
            message = "网关超时";
            break;
          case 505:
            message = "HTTP版本不受支持";
            break;
          default:
            message = "网络连接故障";
        }

        showFailToast(message);
        return Promise.reject(error);
      }
    );
  }

  constructor(config: AxiosRequestConfig) {
    Http.axiosConfigDefault = config;
    Http.axiosInstance = Axios.create(config);
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 通用请求函数
  public request<T>(paramConfig: AxiosRequestConfig): Promise<T> {
    const config = { ...Http.axiosConfigDefault, ...paramConfig };
    return new Promise((resolve, reject) => {
      Http.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export const http = new Http(configDefault);
