import type { Dayjs } from "dayjs";

export interface TicketType {
  id: string | number;
  name: string;
  price: string | number;
  quantity?: number;
  description?: string;
  maxSeats?: string;
  oneAttendeePerTicket?: boolean;
  image?:string
}

interface EventData {
  eventTitle: string;
  eventDate: Dayjs | null ;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  venueName: string;
  venueAddress: string;
  description: string;
  coverImage:  string | null;

  ticketTypes?: TicketType[];
}



export default EventData;
