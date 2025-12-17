"use client";
import { CategoryDB } from "@/type";
import { SelectCategory } from "./_components/SelectCategory";
import React, { ChangeEvent, useState } from "react";
import { Product } from "@prisma/client";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { CreateProductSchema } from "@/schemas/CreateProductSchema";
import {
  CreateProductAction,
  EditProductAction,
} from "./_components/ProductAction";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { EditProductSchema } from "@/schemas/EditProductSchema";
// =========================================================================
interface InputsValue {
  title: string;
  description: string;
  price: string | number;
}
interface Errors {
  title?: string;
  description?: string;
  categoryId?: string;
  price?: string;
  image?: string;
}
function CreateProductForm({
  categories,
  product,
}: {
  categories: CategoryDB[];
  product?: Product;
}) {
  const [categoryId, setCategoryId] = useState(
    product ? product.categoryId : categories[0].id
  );
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [inputsValue, setInputsValue] = useState<InputsValue>({
    title: product ? product.title : "",
    description: product ? product.description : "",
    price: product ? product.price : "",
  });
  const [imageProduct, setImageProduct] = useState(
    product ? product.image : ""
  );
  const [file, setFile] = useState<File | null>(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageProduct(url);
      setFile(file);
    }
  };
  const schema = product ? EditProductSchema : CreateProductSchema;
  const action = product ? EditProductAction : CreateProductAction;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const values = {
      image: file as File,
      title: inputsValue.title,
      description: inputsValue.description,
      price: String(inputsValue.price),
      categoryId,
    };
    const validation = schema.safeParse(values);
    if (!validation.success) {
      const newError: Errors = {};
      validation.error.issues.forEach((error) => {
        if (error.path[0] === "title") newError.title = error.message;
        if (error.path[0] === "description")
          newError.description = error.message;
        if (error.path[0] === "price") newError.price = error.message;
        if (error.path[0] === "categoryId") newError.categoryId = error.message;
        if (error.path[0] === "image") newError.image = error.message;
      });
      setErrors(newError);
      return;
    }
    setLoading(true);
    const result = await action(values, product ? product.id : undefined);
    setLoading(false);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    setErrors({});
    if (!product) {
      setInputsValue({
        title: "",
        description: "",
        price: "",
      });
      setImageProduct("");
    }
    setFile(null);
    toast.success(
      `${product ? "Edit Product Success" : "Created Product Success"}`,
      {
        className: "toast-font",
      }
    );
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div
          className={`bg-white shadow w-162.5 ${
            imageProduct ? "h-fit" : "h-100"
          } rounded-xl relative overflow-hidden group`}
        >
          {imageProduct && (
            <Image
              src={imageProduct}
              alt="Product Image"
              width={600}
              height={338}
              className="w-full object-cover"
            />
          )}
          <div
            className={`absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center ${
              imageProduct
                ? "hidden group-hover:flex w-full h-full bg-black/20"
                : "flex "
            }`}
          >
            <label
              className={` text-2xl p-1 shadow bg-white cursor-pointer text-primary size-15 flex items-center justify-center rounded-full `}
              htmlFor="file"
            >
              <FaDownload />
            </label>
            <input onChange={handleImage} type="file" hidden id="file" />
          </div>
        </div>
        {errors.image && <p>{errors.image}</p>}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="nameProduct" className="text-slate-600">
            Name Product
          </label>
          <input
            onChange={(e) =>
              setInputsValue((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            value={inputsValue.title}
            type="text"
            id="nameProduct"
            className="border border-gray-300 py-3 px-4 rounded-xl outline-none focus:border-primary transition-css"
            placeholder="Write the product name"
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-slate-600">
            Description
          </label>
          <input
            onChange={(e) =>
              setInputsValue((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            value={inputsValue.description}
            type="text"
            id="description"
            className="border border-gray-300 py-3 px-4 rounded-xl outline-none focus:border-primary transition-css"
            placeholder="Write the product description"
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-slate-600">
            Price
          </label>
          <input
            onChange={(e) =>
              setInputsValue((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            value={inputsValue.price}
            type="number"
            id="price"
            className="border border-gray-300 py-3 px-4 rounded-xl outline-none focus:border-primary transition-css"
            placeholder="Write the product price"
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <SelectCategory
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          categories={categories}
        />
        {errors.categoryId && <p>{errors.categoryId}</p>}
        <button
          disabled={loading}
          type="submit"
          className="bg-primary py-3 px-4 shadow cursor-pointer text-white rounded flex items-center justify-center disabled:bg-blue-200"
        >
          {loading ? <Loader /> : product ? "Save" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreateProductForm;
