import axios from "axios";

export const travelApi = {
  getTravelList: async () => {
    const data = await axios.get("/mock/tavel-list");
    console.log(data);
    return data.data;
  },
};
