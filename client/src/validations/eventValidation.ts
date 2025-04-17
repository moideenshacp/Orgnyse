import { z } from "zod";


// Step 1: Basic Info Validation with stricter rules
export const basicInfoSchema = z
  .object({
    eventTitle: z.string().trim().min(1, "Event title is required"),
    venueName: z.string().trim().min(1, "Venue name is required"),
    venueAddress: z.string().trim().min(1, "Venue address is required"),
  })



// Step 2: Image & Description Validation
export const imageDescriptionSchema = z.object({
    description: z
      .string()
      .trim()
      .min(20, "Description must be at least 20 characters"),
  });


  //ticket validation
export const ticketSchema = z.object({
  name: z.string().trim().min(1, "Ticket name is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Price must be a valid number",
    }),
  maxSeats: z
    .string()
    .min(1, "Max seats is required")
    .refine((val) => Number(val) > 0 && !isNaN(Number(val)), {
      message: "Max seats must be a valid number",
    }),
  description: z.string().optional(),
  oneAttendeePerTicket: z.boolean(),
});
