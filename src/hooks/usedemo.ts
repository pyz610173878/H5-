import { reactive, ref } from "vue";
// import { GetCategory } from "../api/info";

export interface CategoryOption {
  category_name: string;
  children?: string;
  id: number;
  parent_id: null;
}

export interface InfoData {
  category_options: CategoryOption[];
}

const response = {
  data: [
    {
      id: 1,
      title: "炉顶烟气挡板门机械指针指示错误12311",
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息123",
      time: "2023-04-15 18:00:01",
      accomplish: "已完成"
    }
  ]
};

/** 自定义hook */
export const categoryHook = () => {
  const infoData: InfoData = ref({
    category_options: []
  });
  // 还是要在熟悉一下 ref. reactive的区别
  /** 获取分类 */
  const handlerGetCategory = () => {
    //
    infoData.value.category_options = response.data;
    //
  };

  // 函数指责单一，一个函数只做一件事情。
  // 我有五个接口请求，我就写五个函数，不要写一个函数，然后在函数里面写五个请求。

  return {
    infoData,
    handlerGetCategory
  };
};

// 调用api接口
// 不是直接定义函数，而是使用export关键字导出函数
// 定义一个与接口数据类型一致的变量。一般情况用reactive方法，因为他对应的是复杂数据。
// 编写具体的函数使用箭头函数，使用接口，采用.then方法，把获取的数据赋值给新变量。
// 使用return 关键字返回方法与数据。
