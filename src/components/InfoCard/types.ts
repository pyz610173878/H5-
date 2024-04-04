import { PropType } from "vue";

export type CardType =
  | "accomplish"
  | "cancel"
  | "retracted"
  | "treated"
  | "approve";

export type CardTypecolor = "red" | "green" | "blue" | "red" | "white";


// 定义一个接口来描述状态到颜色的映射
export interface StateColorMap {
    'accomplish': string;
    状态2: string;
    状态3: string;
    状态4: string;
    状态5: string;
  }

export interface CardProps {
  texts?: CardType;
  info: string;
  time: string;
  text: string;
  title: string;
  id: number;
  accomplish?: string;
  color?: CardTypecolor;
}


// 定义的类型可以是一个类或者是构造函数
