import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1),
  description: string().min(50),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).nonempty(),
});

export const ContactSchema = object({
  name: string().min(6, "Name must be at least 3 characters long"),
  email: string()
    .min(6, "Email must be at least 6 characters long")
    .email("Invalid email format"),
  subject: string().min(6, "Subject must be at least 3 characters long"),
  message: string()
    .min(50, "Message must be at least 3 characters long")
    .max(200, "Message maximum length is 200 characters"),
});
