import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";
import TodoList from "@/components/TodoList/index.vue";
import Todoview from "@/components/Todoview/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      },
      {
        path: "todo",
        name: "Todo",
        component: () => import("@/views/Todo/index.vue"),
        meta: {
          title: "待办"
        }
      },
      {
        path: "toRead",
        name: "ToRead",
        component: () => import("@/views/ToRead/index.vue"),
        meta: {
          title: "待阅"
        }
      },
      {
        path: "todone",
        name: "ToDone",
        component: () => import("@/views/ToDone/index.vue"),
        meta: {
          title: "已办"
        }
      },
      {
        path: "read",
        name: "Read",
        component: () => import("@/views/Read/index.vue"),
        meta: {
          title: "已阅"
        }
      },
      {
        path: "apllyfor",
        name: "Apllyfor",
        component: () => import("@/views/Apllyfor/index.vue"),
        meta: {
          title: "申请"
        }
      }, {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "我的",
          noCache: true
        }
      },
    ],
    // 先不搞,因为如果后面后端返回的路由是动态的,这里就不好处理了
  },
  {
    path: "/Todoview",
    name: "Todoview",
    component: Todoview,
    children: [
      // 空的嵌套路由，匹配 '/user/:id'
      {
        path: "active",
        name: "Active",
        component: () => import("@/views/quality/active/index.vue"),
        meta: {
          title: "质量活动"
        }
      },
      {
        path: "check",
        name: "Check",
        component: () => import("@/views/quality/check/index.vue"),
        meta: {
          title: "质量检查"
        }
      },
    ],
  },
  // 审批管理
];



export default routes;
