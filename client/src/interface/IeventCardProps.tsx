import { Dayjs } from "dayjs";
import { TicketType } from "./IeventData";

export interface EventCardProps {
  event: EventCardData;
}

export interface EventCardData {
  _id?: string;
  eventTitle: string;
  eventDate: Dayjs | null | string; 
  startTime: Dayjs | null | string;
  endTime: Dayjs | null | string;
  venueName: string;
  venueAddress: string;
  description: string;
  coverImage?: string;
  ticketTypes?: TicketType[];

  // Optional analytics fields
  soldTickets?: number;
  totalTickets?: number;
  revenue?: number;
  isActive?: boolean;
}
