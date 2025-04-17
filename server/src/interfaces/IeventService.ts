import { IEvent } from "./IeventModel";

export interface IEventService {
  createEvent(data: IEvent): Promise<IEvent>;
}
