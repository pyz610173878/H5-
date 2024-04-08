import { ref, reactive } from "vue";
import { GetNoticeList } from "@/api/ListInfo/index";
//  定义数据结构

export const GetNoticeInfo = () => {
  const response = {
    data: [
      {
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        id: 1,
        type: "未读",
        color: "blue"
      },
      {
        title: "最新公司“质量文件标准",
        content: "最新司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        id: 1,
        type: "已读",
        color: "blue"
      },
      {
        title: "最新公司“质量文件标准",
        content: "最新司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        id: 1,
        type: "已读",
        color: "blue"
      }
    ]
  };
  const Data = ref({
    Notice_Data: []
  });

  /**
   * 处理通知列表
   */
  const handlerGetNoticeList = () => {
    Data.value.Notice_Data = response.data;
    console.log(Data.value.Notice_Data,"测试测试");
  };

  return {
    Data,
    handlerGetNoticeList
  }
};
