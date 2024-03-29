import type { PropType } from 'vue'
// Desc: Button component types
// button size type
export type slButtonsize = 'large' | 'small' | 'default';
// 联合类型
export type slButtontype = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export interface ButtonProps {
    size?: slButtonsize;
    type?: slButtontype;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}

