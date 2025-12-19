"use server";
import { CreateProductSchema } from "@/schemas/CreateProductSchema";
import { CreateProductDataType, EditProductDataType } from "@/type";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { EditProductSchema } from "@/schemas/EditProductSchema";
// ==========================================================================
export const CreateProductAction = async (
  data: CreateProductDataType,
  id?: number | undefined
) => {
  const validation = CreateProductSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const imageFile = validation.data.image;
    if (!imageFile) return { error: "No Image Provided try again later" };
    let image = (await uploadImageToCLoudinary(imageFile)) as { url: string };
    if (!image.url) return { error: "Failed to upload image in action" };
    await prisma.product.create({
      data: {
        title: validation.data.title,
        price: Number(validation.data.price),
        description: validation.data.description,
        categoryId: validation.data.categoryId,
        image: image.url,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/categories");
    revalidatePath("/admin/products");
  } catch (error) {
    console.log(error);
    return { error: "Failed to Create Product" };
  }
};
export const EditProductAction = async (
  data: EditProductDataType,
  id: number | undefined
) => {
  const validation = EditProductSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    let image = null;
    const imageFile = validation.data.image;
    if (imageFile && imageFile.size > 0) {
      image = await uploadImageToCLoudinary(imageFile);
    }
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) return { error: "Product not found" };
    await prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        title: validation.data.title,
        price: Number(validation.data.price),
        description: validation.data.description,
        categoryId: validation.data.categoryId,
        image: image ? image.url : product.image,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/categories");
    revalidatePath("/admin/products");
  } catch (error) {
    console.log(error);
    return { error: "Failed to Edit Product" };
  }
};

const uploadImageToCLoudinary = async (image: File | null) => {
  try {
    const formData = new FormData();
    if (image) formData.append("file", image);
    formData.append("pathnam", "products-images-store-courses");
    const res = await fetch(
      `${process.env.AUTH_URL}/api/upload-image-product`,
      {
        method: "POST",
        body: formData,
      }
    ); // { url: image => string }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed To Fetch" };
  }
};
