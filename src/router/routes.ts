import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage/index.vue";
import TodoList from "@/components/TodoList/index.vue";
import Todoview from "@/components/Todoview/index.vue";
import shenpi from "@/views/shenpi/index.vue";
import planning from "@/views/QualityControl/planning/index.vue";
import control from "@/views/control/index.vue";
import check from "@/views/check/index.vue";
import statistics from "@/views/statistics/index.vue";
import active from "@/views/active/index.vue";
import equipment from "@/views/equipment/index.vue";
import approvalList from "@/views/ApprovalList/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "HomePage" },
    children: [
      {
        path: "homepage",
        name: "HomePage",
        component: HomePage,
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
      },
      {
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
          title: "我的"
        }
      },
      {
        path: "todo",
        name: "Todo",
        component: () => import("@/views/Todo/index.vue"),
        meta: {
          title: "待办"
        }
      }
    ]
    // 先不搞,因为如果后面后端返回的路由是动态的,这里就不好处理了
  },
  // {
  //   path: "/Todoview",
  //   name: "Todoview",
  //   component: Todoview,
  //   children: [
  //     // 空的嵌套路由，匹配 '/user/:id'
  //     {
  //       path: "active",
  //       name: "Active",
  //       component: () => import("@/views/quality/active/index.vue"),
  //       meta: {
  //         title: "质量活动"
  //       }
  //     },
  //     {
  //       path: "check",
  //       name: "Check",
  //       component: () => import("@/views/quality/check/index.vue"),
  //       meta: {
  //         title: "质量检查"
  //       }
  //     }
  //   ]
  // }
  // 审批管理
  {
    path: "/shenpi",
    name: "shenpi",
    component: shenpi,
    children: [
      {
        path: "shenpi1",
        name: "shenpi1",
        component: () => import("@/views/shenpi/shenpi1/index.vue"),
        meta: {
          title: "审批1"
        }
      },
      {
        path: "shenpi2",
        name: "shenpi2",
        component: () => import("@/views/shenpi/shenpi2/index.vue"),
        meta: {
          title: "审批2"
        }
      },
      {
        path: "shenpi3",
        name: "shenpi3",
        component: () => import("@/views/shenpi/shenpi3/index.vue"),
        meta: {
          title: "审批3"
        }
      }
    ]
  },
  {
    path: "/planning",
    name: "Planning",
    component: planning
  },
  {
    path: "/control",
    name: "Control",
    component: control
  },
  {
    path: "/active",
    name: "Active",
    component: active
  },
  {
    path: "/check",
    name: "Check",
    component: check
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: statistics
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: equipment
  },
  {
    path: "/approvalList",
    name: "ApprovalList",
    component: approvalList
  },
  {
    path: "/tasklist",
    name: "TaskList",
    component: () => import("@/views/TaskList/index.vue"),
  }
];

export default routes;
