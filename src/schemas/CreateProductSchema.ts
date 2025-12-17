import z from "zod";
// ==============================================================================
export const CreateProductSchema = z.object({
  image: z
    .instanceof(File, { message: "Product image is required." })
    .refine((file) => file.size > 0, {
      message: "Product image is required.",
    }),
  title: z
    .string({ message: "Product name must be a string." })
    .min(2, { message: "Product name must be at least 2 characters long." })
    .max(50, { message: "Product name must be at most 50 characters long." }),

  description: z
    .string({ message: "Product description must be a string." })
    .min(2, {
      message: "Product description must be at least 2 characters long.",
    })
    .max(400, {
      message: "Product description must be at most 400 characters long.",
    }),

  price: z
    .string({ message: "Price must be a string." })
    .nonempty({ message: "Price is required." }),

  categoryId: z
    .string({ message: "Category ID must be a string." })
    .nonempty({ message: "Category is required." }),
});
