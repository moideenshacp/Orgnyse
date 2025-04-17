import { IEvent } from "./IeventModel";

export interface IEventRepository {
  create(eventData: IEvent): Promise<IEvent>;
}
