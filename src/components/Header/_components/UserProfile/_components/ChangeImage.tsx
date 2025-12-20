"use client";
import React, { ChangeEvent } from "react";
import { IoIosReverseCamera } from "react-icons/io";
// ==========================================================
function ChangeImage({
  setImageChange,
  setImageFile,
}: {
  setImageChange: React.Dispatch<React.SetStateAction<string>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}) {
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageChange(url);
      setImageFile(file)
    }
  };
  return (
    <div className="absolute -bottom-2 button bg-white size-6 rounded-full flex items-center justify-center">
      <label className="text-primary text-xl cursor-pointer" htmlFor="file">
        <IoIosReverseCamera />
      </label>
      <input onChange={handleChangeImage} type="file" hidden id="file" />
    </div>
  );
}

export default ChangeImage;
