import express from "express";
import { EventRepository } from "../repositories/eventRepository";
import { EventService } from "../services/eventService";
import { EventController } from "../controllers/eventController";
import { IEventRepository } from "../interfaces/IeventRepository";
import { IEventService } from "../interfaces/IeventService";
import { IEventController } from "../interfaces/IeventController";

const router = express.Router();

// Dependency Injection
const eventRepository:IEventRepository = new EventRepository();
const eventService:IEventService = new EventService(eventRepository);
const eventController:IEventController = new EventController(eventService);

// Routes
router.post("/create-events",eventController.createEvent);
router.get("/events", eventController.getAllEvents);
router.get("/events/:id", eventController.getEventById);


export default router;
