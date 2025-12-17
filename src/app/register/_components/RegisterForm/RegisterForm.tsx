"use client";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { redirect, useRouter } from "next/navigation";
import { IoEyeOff } from "react-icons/io5";
import ButtonsAuthO from "@/components/ButtonsAuthO/ButtonsAuthO";
import { RegisterAction } from "./_components/RegisterAction";
import { RegisterSchema } from "@/schemas/RegisterSchema";
// ===============================================================================
interface Errors {
  name?: string;
  email?: string;
  passowrd?: string;
  confirmPassowrd?: string;
}
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [openPassword, setOpenPassword] = useState(false);
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    const value = {
      name,
      email,
      password,
      confirmPassword,
    };
    e.preventDefault();
    const validation = RegisterSchema.safeParse(value);
    if (!validation.success) {
      const newError: Errors = {};
      validation.error.issues.forEach((error) => {
        if (error.path[0] == "name") newError.name = error.message;
        if (error.path[0] == "email") newError.email = error.message;
        if (error.path[0] == "password") newError.passowrd = error.message;
        if (error.path[0] == "confirmPassword")
          newError.confirmPassowrd = error.message;
      });
      setErrors(newError);
      return;
    }
    setLoading(true);
    const result = await RegisterAction(value);
    setLoading(false);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    setErrors({});
    router.refresh();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light shadow sm:p-10 p-5 rounded-2xl lg:w-140 sm:w-150 w-full flex flex-col gap-10 lg:mx-0 mx-auto"
    >
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="font-bold md:text-4xl sm:text-3xl text-2xl">
            Register
          </h2>
        </div>
        <ButtonsAuthO />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1/2 border-b border-b-gray-300"></span>
        <span className="text-[20px] mb-1">or</span>
        <span className="w-1/2 border-b border-b-gray-300"></span>
      </div>
      <div className="flex flex-col gap-5">
        {/* الاسم */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            disabled={loading}
            onChange={(e) => setName(e.target.value)}
            className={`border border-gray-400 py-2 px-2 rounded outline-none focus:border-primary transition-css ${
              errors.email && "border-red-500"
            }`}
            type="text"
            placeholder="enter your name"
            id="name"
          />
          {errors.name && (
            <p className="text-red-500 text-[14px]">{errors.name}</p>
          )}
        </div>
        {/* الايميل */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email address</label>
          <input
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            className={`border border-gray-400 py-2 px-2 rounded outline-none focus:border-primary transition-css ${
              errors.email && "border-red-500"
            }`}
            type="email"
            placeholder="example@gmail.com"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-[14px]">{errors.email}</p>
          )}
        </div>
        {/* الباسورد */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              className={`border w-full border-gray-400 py-2 px-2 rounded outline-none focus:border-primary transition-css ${
                errors.passowrd && "border-red-500"
              }`}
              type={openPassword ? "text" : "password"}
              id="password"
              placeholder="enter your password"
            />
            <i
              onClick={() => setOpenPassword(!openPassword)}
              className="absolute cursor-pointer right-2 hover:bg-gray-100 bg-white transition-css rounded-full  h-8.75 w-8.75 flex items-center justify-center top-1/2 -translate-y-1/2 bottom-0 text-2xl"
            >
              {openPassword ? <IoMdEye /> : <IoEyeOff />}
            </i>
          </div>
          {errors.passowrd && (
            <p className="text-red-500 text-[14px]">{errors.passowrd}</p>
          )}
        </div>
        {/* تأكيد الباسورد */}
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              disabled={loading}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`border w-full border-gray-400 py-2 px-2 rounded outline-none focus:border-primary transition-css ${
                errors.confirmPassowrd && "border-red-500"
              }`}
              type={openConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="enter confirm password"
            />
            <i
              onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
              className="absolute cursor-pointer right-2 hover:bg-gray-100 bg-white transition-css rounded-full  h-8.75 w-8.75 flex items-center justify-center top-1/2 -translate-y-1/2 bottom-0 text-2xl"
            >
              {openConfirmPassword ? <IoMdEye /> : <IoEyeOff />}
            </i>
          </div>
          {errors.confirmPassowrd && (
            <p className="text-red-500 text-[14px]">{errors.confirmPassowrd}</p>
          )}
        </div>
        <button
          disabled={loading}
          className="bg-primary hover:scale-95 hover:rotate-1 transition-css hover:shadow-2xl py-3 mt-3 w-full shadow transition-css text-center cursor-pointer text-white rounded disabled:bg-blue-200 text-[18px] flex items-center justify-center"
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
      <span className="flex justify-center items-center gap-2 sm:text-[17px] text-[13px]">
       already have an account? 
        <Link
          className="text-blue-500 hover:underline font-semibold "
          href={"/login"}
        >
          Sign in
        </Link>
      </span>
    </form>
  );
}

export default RegisterForm;
