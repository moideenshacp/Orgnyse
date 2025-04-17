import { Request, Response } from "express";

export interface IEventController {
  createEvent(req: Request, res: Response): Promise<void>;
}
