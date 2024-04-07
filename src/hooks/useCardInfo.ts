import { ref, reactive } from "vue";

import { GetTodoList, GetCompletedList, GetReadingList, GetReadoneList, GetApplicationList } from "@/api/ListInfo/index";
// import { type CardProps, CardProp } from "@/components/InfoCard/type";
// 调接口

// 我的数据肯定不是死的，这里的响应式数据是从接口中获取的。
// 只需要定义数据类型，不需要定义具体数据

export const GetInfoCard = () => {
  const response = {
    data: [{
      id: 1,
      title: "炉顶烟气挡板门机械指针指示错误",
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息",
      time: "2023-04-15 18:00:01",
      accomplish: "已完成"
    },
    {
      id: 2,
      title: "炉顶烟气挡板门机械指针指示错误",
      text: "流程类型：重要会议任务工作流程",
      info: "填写信息",
      time: "2023-04-15 18:00:01",
      accomplish: "已完成"
    }]
  }

  const Datas = ref({
    card_Data: [],

  });
  const Data = ref({
    Notice_Data: [
      {
        id: 1,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "未读",
      },
      {
        id: 2,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "已读",
      }
    ]
  })
  /**
   * 处理待办事项列表
   * @returns 
   */
  const handlerGetTodoList = () => {
    Datas.value.card_Data = response.data;
  };
  /**
   * 处理已办事项列表
   * @returns 
   */
  // const handlerGetCompletedList = () => {
  //   return GetCompletedList().then((response) => {
  //     infoData.category_options = response.data;
  //     console.log(response.data, "分类数据");

  //     console.log(infoData.category_options, "分类名称");
  //   });
  // };
  /**
   * 处理待阅事项列表
   * @returns 
   */

  // const handlerGetReadingList = () => {
  //   return GetReadingList().then((response) => {
  //     infoData.category_options = response.data;
  //     console.log(response.data, "分类数据");

  //     console.log(infoData.category_options, "分类名称");
  //   });
  // };
  /**
   * 处理已阅事项列表
   * @returns 
   */
  // const handlerGetReadoneList = () => {
  //   return GetReadoneList().then((response) => {
  //     infoData.category_options = response.data;
  //     console.log(response.data, "分类数据");

  //     console.log(infoData.category_options, "分类名称");
  //   });
  // };
  /**
   * 处理申请事项列表
   * @returns 
   */
  // const handlerGetApplicationList = () => {
  //   return GetApplicationList().then((response) => {
  //     infoData.category_options = response.data;
  //     console.log(response.data, "分类数据");

  //     console.log(infoData.category_options, "分类名称");
  //   });
  // };


  // 定义一个函数，用来获取数据
  return {
    Datas,
    Data,
    handlerGetTodoList
  };
};

// 我要在 TS文件中 定义响应式数据
// 下一步就是定义响应式数据。
