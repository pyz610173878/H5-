export type Noticetype = "未读" | "已读";
export type Noticetypecolor = "blue" | "whitie";

export interface NoticeProps {
  title: string;
  content: string;
  datatime: string;
  id?: number;
  type: string;
  color?: Noticetypecolor;
}
