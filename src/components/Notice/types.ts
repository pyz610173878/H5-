export type Noticetype = "未读" | "已读";
export type Noticetypecolor = "blue" | "whitie";
export type NoticeContainerSize = "large" | "small";

export interface NoticeProps {
  title: string; // 通知标题
  content: string; // 通知内容
  datatime: string; // 通知时间
  id?: number;
  type: string; // 通知类型
  color?: Noticetypecolor;
  container?: NoticeContainerSize;
}
