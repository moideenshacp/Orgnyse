import axios from "axios";
import EventData from "../interface/IeventData";

export const createEvent = async (
   eventData:EventData
  ) => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_SERVER_BASE_URL
        }/create-events`,
        { eventData},
        { withCredentials: true }
      );
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };