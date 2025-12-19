"use client";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success`,
      },
    });

    if (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section-space xl:w-1/2 lg:w-[60%] mx:w-[75%] w-full mx-auto flex flex-col gap-5 px-5"
    >
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="py-3 px-4 text-white rounded shadow transition-css cursor-pointer bg-primary disabled:opacity-50"
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {message && <div className="text-red-500 mt-2">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
