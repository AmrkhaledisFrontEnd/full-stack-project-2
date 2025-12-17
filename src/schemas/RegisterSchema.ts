import z from "zod";
// ================================================================================
export const RegisterSchema = z
  .object({
    name: z
      .string({ message: "Name must be a string" })
      .nonempty({ message: "Name is required" })
      .min(2, { message: "Name is too short min 2 characters" })
      .max(100, { message: "Name is too long max 100 characters" })
      .trim(),

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
    confirmPassword: z.string().nonempty({message:"Confirm Password is required"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The two passwords do not match",
    path: ["confirmPassword"],
  });
