import { ref, reactive } from "vue";
import { GetNoticeList } from "@/api/ListInfo/index";

/**
 * 获取通知公告列表数据
 * @returns
 */
export const GetNoticeInfo = () => {
  // 还有一个问题，通知公告的排序的问题。
  const response = {
    data: [
      {
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "未读",
        color: "blue"
      },
      {
        title: "最新公司“质量文件标准",
        content: "最新司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "已读",
        color: "blue"
      },
      {
        title: "最新公司“质量文件标准",
        content: "最新司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
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
    //
  };
  const getCode = (herf: string) => {
    const regex = /code=([^&]*)/;
    const match = herf.match(regex);
    return match[1];
  };

  return {
    Data,
    handlerGetNoticeList
  };
};
