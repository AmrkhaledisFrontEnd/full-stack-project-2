"use server";
import { AddCategorySchema } from "@/schemas/AddCategorySchema";
import { prisma } from "../../../../../../prisma";
import { revalidatePath } from "next/cache";
// ==================================================================================
export const EditCategoryAction = async (id: string, name: string) => {
  if (!id) return { error: "Category not found" };
  const validation = AddCategorySchema.safeParse({ name });
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const category = await prisma.category.findFirst({
      where: {
        OR: [
          { id },
          {
            name: {
              equals: validation.data.name,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (!category) return { error: "Category not found" };
    if (category?.name === name) return { error: "This Category exists" };
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        name: validation.data.name,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/categories");
    revalidatePath("/admin/products");
  } catch (error) {
    console.log(error);
    return { error: "Failed to Edit this Category" };
  }
};
export const DeleteCategoryAction = async (id: string) => {
  if (!id) return { error: "Category not found" };
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (!category) return { error: "Category not found" };
    await prisma.category.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/categories");
    revalidatePath("/admin/products");
  } catch (error) {
    console.log(error);
    return { error: "Failed Delete This Category" };
  }
};
