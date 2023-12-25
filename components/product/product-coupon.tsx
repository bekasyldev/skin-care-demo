import { Ticket } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const Cupon = () => {
  return (
    <div className="flex items-start flex-col gap-y-3 text-[#909597]">
      <h2 className="font-semibold text-black">Have a coupon?</h2>
      <p className="">Add your code for an instant cart discount</p>
      <div className="border-gray-200 border flex flex-row justify-between gap-x-6">
        <Label className="flex items-center space-x-2" htmlFor="coupon">
          <Ticket size={35} className="ml-3" />
          <Input
            id="coupon"
            className="border-white text-black placeholder:text-[#909597]"
            placeholder="Coupon code"
          ></Input>
          <Button className="font-semibold text-black" variant={"ghost"}>
            Apply
          </Button>
        </Label>
      </div>
    </div>
  );
};
