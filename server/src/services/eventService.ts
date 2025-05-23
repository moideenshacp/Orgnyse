import { IEventService } from "../interfaces/IeventService";
import { IEvent } from "../interfaces/IeventModel";
import { IEventRepository } from "../interfaces/IeventRepository";

export class EventService implements IEventService {
  constructor(private eventRepository: IEventRepository) {}

  async createEvent(data: IEvent): Promise<IEvent> {
    try {
      return await this.eventRepository.create(data);
    } catch (error) {
      throw new Error("Event creation failed");
    }
  }


  async getAllEvents(): Promise<IEvent[]> {
    try {
      return await this.eventRepository.findAll();
    } catch (error) {
      throw new Error("Events fetching failed");
    }
  }


  async getEventById(id: string): Promise<IEvent> {
    try {
      const event = await this.eventRepository.findById(id);
      if (!event) throw new Error("Event not found");
      return event;
    } catch (error) {
      throw new Error("Event fetching failed");
    }
  }
}
