import { IEventService } from "../interfaces/IeventService";
import { IEvent } from "../interfaces/IeventModel";
import { IEventRepository } from "../interfaces/IeventRepository";

export class EventService implements IEventService {
  constructor(private eventRepository: IEventRepository) {}

  async createEvent(data: IEvent): Promise<IEvent> {
    try {
        console.log(data,"heye dtat");
        
      return await this.eventRepository.create(data);
    } catch (error) {
      console.error("Failed to create event:", error);
      throw new Error("Event creation failed");
    }
  }
}
