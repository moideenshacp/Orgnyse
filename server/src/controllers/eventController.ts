import { Request, Response } from "express";
import { IEventController } from "../interfaces/IeventController";
import { IEventService } from "../interfaces/IeventService";
import { eventWithTicketsSchema } from "../validation/eventValidation";

export class EventController implements IEventController {
  constructor(private eventService: IEventService) {}

  public createEvent = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body.eventData, "hey data");
      const parseResult = eventWithTicketsSchema.safeParse(req.body.eventData);

      if (!parseResult.success) {
        const errorMessages = parseResult.error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));
        res
          .status(400)
          .json({ message: "Validation failed", errors: errorMessages });
        return;
      }
      const event = await this.eventService.createEvent(req.body.eventData);
      res.status(201).json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create event" });
    }
  };
  public getAllEvents = async (req: Request, res: Response): Promise<void> => {
    try {
      const events = await this.eventService.getAllEvents();
      res.status(200).json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  };
  public getEventById = async (req: Request, res: Response): Promise<void> => {
    try {
      const evt = await this.eventService.getEventById(req.params.id);
      res.status(200).json(evt);
    } catch (err) {
      console.error(err);
      res.status(404).json({ message: "Event not found" });
    }
  };
}
