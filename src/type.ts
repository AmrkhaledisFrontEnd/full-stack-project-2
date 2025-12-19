import { Prisma } from "@prisma/client";
import { LoginSchema } from "./schemas/LoginSchema";
import z from "zod";
import { CreateProductSchema } from "./schemas/CreateProductSchema";
import { EditProductSchema } from "./schemas/EditProductSchema";
import { RegisterSchema } from "./schemas/RegisterSchema";
import { AddProductInCartSchema } from "./schemas/AddProductInCartSchema";
// =================================================================================================
export type LoginActionDataType = z.infer<typeof LoginSchema>;
export type CategoryDB = Prisma.CategoryGetPayload<{
  include: {
    products: true;
  };
}>;
export type UserDB = Prisma.UserGetPayload<{
  include:{
    userProducts:true
  }
}>
export type CreateProductDataType = z.infer<typeof CreateProductSchema>;
export type EditProductDataType = z.infer<typeof EditProductSchema>;
export type RegisterACtionDataType = z.infer<typeof RegisterSchema>
export type AddProductInCartDataType = z.infer<typeof AddProductInCartSchema>
