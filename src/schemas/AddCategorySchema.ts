import z from "zod";
// ============================================================================
export const AddCategorySchema = z.object({
  name: z
    .string({ message: "Category name must be a string" })
    .nonempty({ message: "Category is required" })
    .min(2, { message: "Category is too short" })
    .max(50, { message: "Category is too long" }),
});
