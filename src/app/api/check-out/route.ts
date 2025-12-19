import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15" as unknown as Stripe.LatestApiVersion,
});

export async function POST(req: Request) {
  const { amount } = await req.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000, 
    currency: "usd", 
  });

  return new Response(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
