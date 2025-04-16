import type { Dayjs } from "dayjs";

export interface TicketType {
  id: string;
  name: string;
  price: string;
  quantity?: number;
  description?: string;
  maxSeats?: string;
  oneAttendeePerTicket?: boolean;
}

interface EventData {
  eventTitle: string;
  eventDate: Dayjs | null;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  venueName: string;
  venueAddress: string;
  description: string;
  coverImage?: File | null;
  ticketName?: string;
  ticketPrice?: string;

  ticketTypes?: TicketType[];
}

export default EventData;
