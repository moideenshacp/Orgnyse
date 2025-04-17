import { IEvent } from "./IeventModel";

export interface IEventService {
  createEvent(data: IEvent): Promise<IEvent>;
  getAllEvents(): Promise<IEvent[]>;
  getEventById(id: string): Promise<IEvent>;
}
