import React, {
    createContext,
    useState,
    ReactNode,
  } from "react";
  import EventData from "../interface/IeventData";
  
  interface EventContextProps {
    eventData: EventData;
    setEventData: React.Dispatch<React.SetStateAction<EventData>>;
    resetEventData: () => void;
  }
  
  const defaultEventData: EventData = {
    eventTitle: "",
    eventDate: null,
    startTime: null,
    endTime: null,
    venueName: "",
    venueAddress: "",
    description: "",
    coverImage: null,
    ticketTypes: [],
  };
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const EventContext = createContext<EventContextProps | undefined>(undefined);

  
  export const EventProvider = ({ children }: { children: ReactNode }) => {
    const [eventData, setEventData] = useState<EventData>(defaultEventData);
  
    const resetEventData = () => {
      setEventData(defaultEventData);
    };
  
    return (
      <EventContext.Provider
        value={{ eventData, setEventData, resetEventData }}
      >
        {children}
      </EventContext.Provider>
    );
  };
  