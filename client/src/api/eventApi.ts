import axios from "axios";
import EventData from "../interface/IeventData";

export const createEvent = async (eventData: EventData) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_BASE_URL}/create-events`,
      { eventData },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllEvents = async (): Promise<EventData[]> => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_BASE_URL}/events`,
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    throw error;
  }
};

export const getEventById = async (id: string): Promise<EventData> => {
  try {
    const res = await axios.get<EventData>(
      `${import.meta.env.VITE_SERVER_BASE_URL}/events/${id}`,
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch event:", error);
    throw error;
  }
};
