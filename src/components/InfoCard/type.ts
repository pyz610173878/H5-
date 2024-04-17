import { number } from "echarts";
import { reactive } from "vue";
// api 地址

export type CardProcess_Underapproval = [
  "COMMIT",
  "REVOKE",
  "START",
  "SUSPEND",
  "ACTIVE",
  "BACK"
];
export type CardProcess_Approved = ["PASS", "STOP", "CANCEL", "VETO"];

// PROCESS_COMMIT 审批中,
// PROCESS_REVOKE审批中,
// PROCESS_START 审批中,
// PROCESS_SUSPEND审批中,
// PROCESS_ACTIVE 审批中;
// PROCESS_BACK审批中,

// PROCESS_PASS 已审批,
// PROCESS_STOP  已审批,
// PROCESS_CANCEL 已审批,
// PROCESS_VETO 已审批,

// 如果他传过来的值等于审批中数组中的任意一个就显示绿色。

export type CardTypecolor = "red" | "green" | "blue" | "red" | "white"; //联合类型

// 定义一个接口来描述状态到颜色的映射
export interface StateColorMap {
  accomplish: string;
  状态2: string;
  状态3: string;
  状态4: string;
  状态5: string;
}

export interface CardProp {
  /**
   * taskName：任务名称
   * processInstanceTitle：流程类型
   * processInstanceStatusStr: 环节类型
   * createTime: 创建时间
   * processInstanceStatus: 状态
   * CardProcess_Underapproval: 审批中
   * CardProcess_Approved: 已审批
   *
   */
  processDefinitionName?: string;
  processInstanceTitle?: string;
  processInstanceStatusStr?: string;
  createTime?: string;
  processInstanceStatus?: string;
  CardProcessUnderapproval?: CardProcess_Underapproval;
  CardProcessApproved?: CardProcess_Approved;
  number?: number;
  accomplish?: string;
  color?: CardTypecolor;
}

// export interface CardProps {
//   infoCard_Data: CardProp[];
// }

// export const categoryHook = () => {
//   const infoCardData: InfoCardData = reactive({
//     infoCard_Data: []
//   });

//   const handlerGetCategory = props.value.cardProps;

//   return {
//     infoCardData,
//     handlerGetCategory
//   };
// };
// export const InfoCard = () => {
//   const props = defineProps<{
//     cardProps: CardProps[];
//   }>();

//   return {
//     props,
//   };
// }

// 定义的类型可以是一个类或者是构造函数

// 假设写在这里，我的状态是不知道的。先别想着抽离。
