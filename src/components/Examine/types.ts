type Examine_type = ["待办", "待阅", "任务", "提醒"];
type Examine_Tasktype = ["待处理", "处理中", "已完成"];
export interface ExamineProps {
  type: Examine_type; //通知类型
  types: Examine_Tasktype; //任务类型
  total: number; // 数量
  columns: number;
  name: string;
  number: number;
}
