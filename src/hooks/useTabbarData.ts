import { ref } from "vue";

/**
 * 主页 Tabbar 数据
 */
const tabbarDatas = ref([
  {
    icon: `/src/assets/Photos/planning.png`,
    title: "质量策划",
    to: {
      name: "Planning"
    }
  },
  {
    icon: "/src/assets/Photos/control.png",
    title: "质量控制",
    to: {
      name: "Control"
    }
  },
  {
    icon: "/src/assets/Photos/active.png",
    title: "质量活动",
    to: {
      name: "Active"
    }
  },
  {
    icon: "/src/assets/Photos/check.png",
    title: "质量检查",
    to: {
      name: "Check"
    }
  },
  {
    icon: "/src/assets/Photos/statistics.png",
    title: "特种统计",
    to: {
      name: "Statistics"
    }
  },
  {
    icon: "/src/assets/Photos/equipment.png",
    title: "特种设备",
    to: {
      name: "Equipment"
    }
  }
]);
