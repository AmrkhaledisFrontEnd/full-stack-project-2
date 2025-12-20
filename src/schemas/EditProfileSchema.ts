import z from "zod";
// ==================================================================
export const EditProfileSchema = z.object({
  id: z.string().nonempty({ message: "User not found" }),
  name: z
    .string({ message: "Name must be a string" })
    .nonempty({ message: "Name is required" })
    .min(2, { message: "Name is too short min 2 characters" })
    .max(100, { message: "Name is too long max 100 characters" })
    .trim(),
  image: z.instanceof(File).nullable().optional(),
});
