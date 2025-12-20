"use server";
import { prisma } from "@/prisma";
import { EditProfileSchema } from "@/schemas/EditProfileSchema";
import { EditProfileActionDataType } from "@/type";
import { revalidatePath } from "next/cache";
// ====================================================================
export const EditProfileAction = async (data: EditProfileActionDataType) => {
  const validation = EditProfileSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: validation.data.id,
      },
    });
    if (!user) return;
    const imageFile = validation.data.image;
    let image: { image: string } | null = null;
    if (imageFile) {
      image = await uploadImageProfile(imageFile);
    }
    await prisma.user.update({
      where: {
        id: validation.data.id,
      },
      data: {
        name: validation.data.name,
        image: image?.image ?? user.image,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    console.log(error);
    return { error: "Failed Edit Profile" };
  }
};

async function uploadImageProfile(imageFile: File | null) {
  try {
    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }
    formData.append("pathname", "users-images");
    const req = await fetch(`${process.env.AUTH_URL}/api/upload-image-user`, {
      method: "POST",
      body: formData,
    });
    const image = await req.json();
    return image;
  } catch (error) {
    console.log(error);
    return { error: "Failed Fetch Upload Image" };
  }
}
