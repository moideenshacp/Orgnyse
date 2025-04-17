export interface TicketType {
  name: string;
  price: number | string;
  maxSeats: number | string;
  description: string;
  oneAttendeePerTicket: boolean;
}

export interface IEvent {
  eventTitle: String;
  description: String;
  eventDate: String;
  startTime: String;
  endTime: String;
  coverImage: String;
  venueAddress: String;
  venueName: String;
  ticketTypes: TicketType[];
}
