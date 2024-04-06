import { pageDefaultTitle } from "@/settings";

export default function setPageTitle(routerTitle?: string): void {
  window.document.title = routerTitle
    ? `${routerTitle} | ${pageDefaultTitle}`
    : `${pageDefaultTitle}`;
}

// 其作用是设置网页的标题，这里的标题是由路由的 meta.title 和 settings.ts 中的 pageDefaultTitle 组成的。
//
