import { IEventRepository } from "../interfaces/IeventRepository";
import EventModel from "../models/eventModel";
import { IEvent } from "../interfaces/IeventModel";

export class EventRepository implements IEventRepository {
  async create(eventData: IEvent): Promise<IEvent> {
    const newEvent = new EventModel(eventData);
    return await newEvent.save();
  }
}
