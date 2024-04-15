import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  data: Array<any>;
};

/**
 * 获取待办事项列表
 * @param data
 * @returns
 */
export function GetTodoTask(data?: number): Promise<ListResult> {
  return http.request({
    url: "/hpcc-tms/v1_0/module/workflow-v1/todoTask",
    method: "post",
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

export function GetNoticeList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}
