import React from "react";

type CurrencyProps = {
  value: string | number;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const Currency = ({ value }: CurrencyProps) => {
  return (
    <div className=" font-semibold">{formatter.format(Number(value))}</div>
  );
};

export default Currency;
