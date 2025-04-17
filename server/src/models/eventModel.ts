import mongoose, { Schema } from "mongoose";
import { IEvent } from "../interfaces/IeventModel";

const ticketTypeSchema: Schema = new mongoose.Schema({
  name: String,
  price: String,
  maxSeats: String,
  description: String,
  oneAttendeePerTicket: Boolean,
});

const eventSchema = new mongoose.Schema({
  eventTitle: String,
  description: String,
  eventDate: String,
  startTime: String,
  endTime: String,
  coverImage: String,
  venueAddress: String,
  venueName: String,
  ticketTypes: [ticketTypeSchema],
});

const EventModel = mongoose.model<IEvent>("Event", eventSchema);
export default EventModel;
