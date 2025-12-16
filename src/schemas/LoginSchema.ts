import z from "zod";
// ================================================================================
export const LoginSchema = z.object({
  email: z
    .string({ message: "Email must be a string" })
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" })
    .min(6, { message: "Email is too short min 6 characters" })
    .max(50, { message: "Email is too long max 50 characters" })
    .trim(),

  password: z
    .string({ message: "Password must be a string" })
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(64, { message: "Password is too long max 64 characters" })
    .trim(),
});
