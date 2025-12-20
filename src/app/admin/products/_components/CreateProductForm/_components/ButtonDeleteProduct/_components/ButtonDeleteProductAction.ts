"use server";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
export const ButtonDeleteProductAction = async (id: number) => {
  if (!id) return { error: "Failed Delete this product, product not found" };
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) return;
    await prisma.product.deleteMany({
      where: {
        id: product.id,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/products");
    revalidatePath("/product-details");
  } catch (error) {
    console.log(error);
    return { error: "Failed Delete This Product" };
  }
};
