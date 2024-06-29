import Mock from "mockjs";

import travel from "@/mock/data/travelData.json";

Mock.mock("/mock/tavel-list", {
  code: 200,
  data: travel,
});
