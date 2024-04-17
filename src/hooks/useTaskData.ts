import { ref, reactive } from "vue";
import { number } from "echarts";
import {
  GetTodoTask,
  GetDoneTask,
  GetCompletedList,
  GetReadingList,
  GetReadoneList,
  GetApplicationList
} from "@/api/ListInfo/index";

export const GetInfoCard = () => {
  const response = {
    data: [
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      },
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      },
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      }
    ]
  };

  const examine_Data = ref({
    totalCount: undefined,
    card_Data: [],
    title_name: {
      待办: 2,
      待阅: 3,
      已办: 4,
      已阅: 5,
      申请: 6
    }
  });

  // 把数据传递到这个对象里面。
  // 下一步呢？
  const Data = ref({
    Notice_Data: [
      {
        id: 1,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "未读"
      },
      {
        id: 2,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "已读"
      }
    ]
  });
  /**
   * 处理待办事项列表
   * @returns
   */
  const handlerGetTodoList = (pageIndex: number) => {
    return GetTodoTask(pageIndex).then(response => {
      examine_Data.value.card_Data = response.data;
      examine_Data.value.title_name["待办"] = response.totalCount;
    });
  };
  /**
   * 处理已办事项列表
   * @returns
   */
  // const handlerGetCompletedList = () => {
  //   return GetCompletedList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };
  /**
   * 处理待阅事项列表
   * @returns
   */

  // const handlerGetReadingList = () => {
  //   return GetReadingList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };
  /**
   * 处理已阅事项列表
   * @returns
   */
  // const handlerGetReadoneList = () => {
  //   return GetReadoneList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };
  /**
   * 处理申请事项列表
   * @returns
   */
  // const handlerGetApplicationList = () => {
  //   return GetApplicationList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };

  // 定义一个函数，用来获取数据
  return {
    examine_Data,
    Data,
    handlerGetTodoList
  };
};
