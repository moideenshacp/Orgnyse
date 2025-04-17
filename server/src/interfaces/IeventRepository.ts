import { IEvent } from "./IeventModel";

export interface IEventRepository {
  create(eventData: IEvent): Promise<IEvent>;
  findAll(): Promise<IEvent[]>;
  findById(id: string): Promise<IEvent | null>;
}
