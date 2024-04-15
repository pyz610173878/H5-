/*
 * @Author: hacker 610173878@qq.com
 * @Date: 2024-04-09 16:07:48
 * @LastEditors: hacker 610173878@qq.com
 * @LastEditTime: 2024-04-11 18:40:00
 * @FilePath: \H5-\src\api\UserInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

export function getUserCode(data?: string): Promise<ListResult> {
  return http.request({
    url: "/hpcc-tms/v1_0/module/qywx/getUserInfo?code=" + data,
    method: "get",
    data
  });
}

export function getDatail(data?: number): Promise<ListResult> {
  return http.request({
    url: "/hpcc-tms/v1_0/module/workflow-v1/detail",
    method: "get",
    data
  });
}

