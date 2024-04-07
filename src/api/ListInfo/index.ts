import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

/**
 * 获取待办事项列表
 * @param data
 * @returns
 */
export function GetTodoList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}

/**
 * 获取已办事项列表
 * @param data
 * @returns
 */

export function GetCompletedList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}
/**
 * 获取待阅事项列表
 * @param data
 * @returns
 */

export function GetReadingList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}
/**
 * 获取已阅事项列表
 * @param data
 * @returns
 */
export function GetReadoneList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}

/**
 * 获取申请事项列表
 * @param data
 * @returns
 */

export function GetApplicationList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}
