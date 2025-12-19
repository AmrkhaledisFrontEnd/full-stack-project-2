import z from "zod";
// ============================================================
export const AddProductInCartSchema = z.object({
  userId: z.string().nonempty({ message: "User not found" }),
  name: z.string().nonempty({ message: "Product name is required" }),
  price: z.string().nonempty({ message: "Product Price is required" }),
  image: z.string().nonempty({ message: "Image Product not found" }),
  description:z.string(),
  productId:z.string()
});
