import { ref } from "vue";

/**
 * 主页 Tabbar 数据
 */

export const GetTabbarData = () => {
  const tabbarDatas = ref([
    {
      icon: `planning`,
      title: "质量策划",
      to: {
        name: "Planning"
      }
    },
    {
      icon: `control`,
      title: "质量控制",
      to: {
        name: "Control"
      }
    },
    {
      icon: `active`,
      title: "质量活动",
      to: {
        name: "Active"
      }
    },
    {
      icon: `magnifying_Glass`,
      title: "质量检查",
      to: {
        name: "Check"
      }
    },
    {
      icon: `statistics`,
      title: "质量统计",
      to: {
        name: "Statistics"
      }
    },
    {
      icon: `equipment`,
      title: "特种设备",
      to: {
        name: "Equipment"
      }
    }
  ]);

  return {
    tabbarDatas
  };
};
