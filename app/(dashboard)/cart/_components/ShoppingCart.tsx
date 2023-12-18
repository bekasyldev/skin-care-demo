import React from "react";
import ProductTable from "./ProductTable";
import CartSummary from "./CartSummary";
import { Cupon } from "@/components/Cupon";

const ShoppingCart = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between gap-x-20">
        <ProductTable />
        <CartSummary />
      </div>
      <Cupon />
    </div>
  );
};

export default ShoppingCart;
