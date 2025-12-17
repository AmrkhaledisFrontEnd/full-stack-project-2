"use server";
import { AddCategorySchema } from "@/schemas/AddCategorySchema";
import { prisma } from "../../../../../../prisma";
import { revalidatePath } from "next/cache";
// ===================================================================================
export const CreateCategoryAction = async (categoryName: string) => {
  const validation = AddCategorySchema.safeParse({ name : categoryName });
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const category = await prisma.category.findFirst({
     where:{
      name:{
        equals:validation.data.name,
        mode:"insensitive"
      }
     }
    })
    if(category?.name === categoryName) return {error:"This Category exists"}
    await prisma.category.create({
      data: {
        name: validation.data.name,
      },
    });
    revalidatePath("/")
    revalidatePath("/admin/categories")
    revalidatePath("/admin/products")
  } catch (error) {
    console.log(error);
    return { error: "Failed To Add Category" };
  }
};
