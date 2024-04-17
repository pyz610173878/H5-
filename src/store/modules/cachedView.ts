/*
 * @Author: hacker 610173878@qq.com
 * @Date: 2024-03-22 15:52:02
 * @LastEditors: hacker 610173878@qq.com
 * @LastEditTime: 2024-04-12 09:38:44
 * @FilePath: \H5-\src\store\modules\cachedView.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { store } from "@/store";
import type { toRouteType } from "@/router";
import { number } from "echarts";

/**
 * pinia对象
 */
export const useCachedViewStore = defineStore({
  id: "cached-view",
  state: () => ({
    // 缓存页面 keepAlive
    cachedViewList: [] as string[],
    Code: "" as string,
    User_info: {
      errcode: 0 as number,
      userid: "" as string,
      mobile: "" as string,
      gender: "" as string,
      email: "" as string,
      avatar: "" as string,
      qr_code: "" as string,
      biz_mail: "" as string,
      address: "" as string,
      userNo: "" as string,
      qywxToken: "" as string
    }
  }),
  actions: {
    addCachedView(view: toRouteType) {
      // 不重复添加
      if (this.cachedViewList.includes(view.name as string)) return;
      if (!view?.meta?.noCache) {
        this.cachedViewList.push(view.name as string);
      }
    },
    delCachedView(view: toRouteType) {
      const index = this.cachedViewList.indexOf(view.name as string);
      index > -1 && this.cachedViewList.splice(index, 1);
    },
    delAllCachedViews() {
      this.cachedViewList = [] as string[];
    }
  }
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
