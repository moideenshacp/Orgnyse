import { z } from "zod";

export const eventWithTicketsSchema = z.object({
  eventTitle: z.string().trim().min(1, "Event title is required"),
  venueName: z.string().trim().min(1, "Venue name is required"),
  venueAddress: z.string().trim().min(1, "Venue address is required"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

    ticketTypes: z
    .array(
      z.object({
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
      })
    )
    .min(1, "At least one ticket is required"),
});

export type EventWithTicketsSchemaType = z.infer<typeof eventWithTicketsSchema>;
