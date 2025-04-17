import { IEventRepository } from "../interfaces/IeventRepository";
import EventModel from "../models/eventModel";
import { IEvent } from "../interfaces/IeventModel";

export class EventRepository implements IEventRepository {
  async create(eventData: IEvent): Promise<IEvent> {
    try {
      const newEvent = new EventModel(eventData);
      return await newEvent.save();
    } catch (error) {
      console.log(error);
      throw new Error("Event creation failed");
    }
  }
  async findAll(): Promise<IEvent[]> {
    try {
      return await EventModel.find();
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch events");
    }
  }
  async findById(id: string): Promise<IEvent | null> {
    try {
      return await EventModel.findById(id).populate("ticketTypes");
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch the Event");
    }
  }
}
