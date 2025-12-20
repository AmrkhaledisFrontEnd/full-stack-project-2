"use server";
import { AddProductInCartSchema } from "@/schemas/AddProductInCartSchema";
import { AddProductInCartDataType } from "@/type";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
// ===========================================================================
export const AddProductInCartAction = async (
  data: AddProductInCartDataType
) => {
  const validation = AddProductInCartSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: validation.data.userId,
      },
    });
    if (!user)
      return { error: "An error occurred while adding the product. Try later" };
    await prisma.userProducts.create({
      data: {
        userId: user.id,
        image: validation.data.image,
        price: Number(validation.data.price),
        name: validation.data.name,
        description: validation.data.description,
        productId: Number(validation.data.productId),
      },
    });
    revalidatePath("/");
    revalidatePath("/cart");
  } catch (error) {
    console.log(error);
    return { error: "Failed Add This Product try again later" };
  }
};

export const ProductQuantityAction = async (
  id: number,
  actionType: "increase" | "decrease" | "delete"
) => {
  if (!id) return { error: "Failed Increase this Product" };
  try {
    const userProduct = await prisma.userProducts.findUnique({
      where: {
        productId: Number(id),
      },
    });
    if (!userProduct) return 
    if (actionType == "increase") {
      await prisma.userProducts.update({
        where: {
          productId: userProduct.productId,
        },
        data: {
          quantity: {
            increment: 1,
          },
        },
      });
      return;
    }
    if (actionType == "decrease") {
      if (userProduct.quantity == 1) {
        await prisma.userProducts.delete({
          where: {
            productId: userProduct.productId,
          },
        });
        return;
      }
      await prisma.userProducts.update({
        where: {
          productId: userProduct.productId,
        },
        data: {
          quantity: {
            decrement: 1,
          },
        },
      });
    }
    if (actionType == "delete") {
      await prisma.userProducts.deleteMany({
        where: {
          productId: userProduct.productId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return { error: "Somthing error try again later" };
  }
};
