export const formatCurrency = (number: number) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });

  const formatted = CURRENCY_FORMATTER.format(number); 
  return formatted; 
}