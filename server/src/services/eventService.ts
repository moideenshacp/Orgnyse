import { IEventService } from "../interfaces/IeventService";
import { IEvent } from "../interfaces/IeventModel";
import { IEventRepository } from "../interfaces/IeventRepository";

export class EventService implements IEventService {
  constructor(private eventRepository: IEventRepository) {}

  async createEvent(data: IEvent): Promise<IEvent> {
    try {
      console.log(data, "heye dtat");

      return await this.eventRepository.create(data);
    } catch (error) {
      console.error("Failed to create event:", error);
      throw new Error("Event creation failed");
    }
  }
  async getAllEvents(): Promise<IEvent[]> {
    try {
      return await this.eventRepository.findAll();
    } catch (error) {
      console.error("Failed to fetch events:", error);
      throw new Error("Events fetching failed");
    }
  }
  async getEventById(id: string): Promise<IEvent> {
    try {
      const event = await this.eventRepository.findById(id);
      if (!event) throw new Error("Event not found");
      return event;
    } catch (error) {
      console.log(error);
      throw new Error("Event fetching failed");
    }
  }
}
