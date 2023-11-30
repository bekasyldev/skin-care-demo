import { discounts } from "@/constants/data";
import { ArrowRight, Ticket } from "lucide-react";
import Link from "next/link";

const Discount = () => {
  return (
    <div className="bg-[#38cb89] text-black p-2 flex flex-row justify-center gap-x-2">
      <Ticket />
      <p className="font-semibold">30% off storewide — Limited time!</p>
      <Link href="/shop" className="flex flex-row">
        Shop now <ArrowRight />
      </Link>
    </div>
  );
};

export default Discount;
