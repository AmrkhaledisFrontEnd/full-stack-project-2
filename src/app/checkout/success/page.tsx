"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
// =================================================================
export default function SuccessPage() {
  const params = useSearchParams();
  const status = params.get("redirect_status");

  return (
    <div className="text-center section-space flex flex-col gap-3">
      <h1 className="text-3xl font-bold mb-4">Payment Successful ✅</h1>
      <p className="text-gray-500">We sent an email with your order confirmation along with Digital Content</p>
      <Link
        className="py-3 px-4 bg-primary text-white rounded shadow w-fit mx-auto"
        href={"/"}
      >
        Go To Home
      </Link>
    </div>
  );
}
