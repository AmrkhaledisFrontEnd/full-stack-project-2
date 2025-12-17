import cloudinary from "@/cloudinary";
import { NextRequest, NextResponse } from "next/server";
// =====================================================================
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;
    const pathname = formData.get("pathnam") as string;
    if (!file)
      return NextResponse.json({ error: "No File Upload" }, { status: 400 });
    const fileBuffer = await file.arrayBuffer();
    const fileBase64 = Buffer.from(fileBuffer).toString("base64");
    const uploadResponse = await cloudinary.uploader.upload(
      `data:${file.type};base64,${fileBase64}`,
      {
        folder: pathname,
        transformation: [{ width: 600, height: 338, crop: "limit" }],
      }
    );
    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Upload Image Product" },
      { status: 500 }
    );
  }
}
