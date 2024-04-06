import { ref } from "vue";
// import { type CardProps, CardProp } from "@/components/InfoCard/type";
// 调接口

// 我的数据肯定不是死的，这里的响应式数据是从接口中获取的。
// 只需要定义数据类型，不需要定义具体数据

export const useInfoCard = () => {
  const test1 = ref(0);

  const gg2 = ref({
    card_Data: [
      {
        id: 1,
        title: "炉顶烟气挡板门机械指针指示错误11123",
        text: "流程类型：重要会议任务工作流程123",
        info: "填写信息123",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      },
      {
        id: 1,
        title: "炉顶烟气挡板门机械指针指示错误11123",
        text: "流程类型：重要会议任务工作流程123",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      }
    ],

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

    // const handlerGetNotice_Data = () => {
    //   return GetNotice_Data().then((respon)) => {
    //     Data.Notice_Data = respon.data;
    //   }
    // }

  // 定义一个函数，用来获取数据
  return {
    test1,
    gg2,
    Data
  };
};

// 我要在 TS文件中 定义响应式数据

// card_Props: [
//   {
//     id: 1,
//     title: "炉顶烟气挡板门机械指针指示错误",
//     text: "流程类型：重要会议任务工作流程",
//     info: "填写信息",
//     time: "2023-04-15 18:00:01",
//     accomplish: "已完成"
//   },
//   {
//     id: 2,
//     title: "炉顶烟气挡板门机械指针指示错误",
//     text: "流程类型：重要会议任务工作流程123",
//     info: "填写信息",
//     time: "2023-04-15 18:00:01",
//     accomplish: "已撤回"
//   },
//   {
//     id: 3,
//     title: "炉顶烟气挡板门机械指针指示错误123",
//     text: "流程类型：重要会议任务工作流程3",
//     info: "填写信息123",
//     time: "2023-04-15 18:00:01",
//     accomplish: "已取消"
//   },
//   {
//     id: 3,
//     title: "炉顶烟气挡板门机械指针指示错误123",
//     text: "流程类型：重要会议任务工作流程3",
//     info: "填写信息123",
//     time: "2023-04-15 18:00:01",
//     accomplish: "已审核"
//   }
// ]
