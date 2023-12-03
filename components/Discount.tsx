import { discounts } from "@/constants/data";
import { ArrowRight, Ticket } from "lucide-react";
import Link from "next/link";

const Discount = () => {
  return (
    <div className="bg-[#38cb89] text-black p-2 flex items-center flex-row justify-center gap-x-2 text-xs">
      <Ticket />
      <p className="font-semibold">30% off storewide — Limited time!</p>
      <Link href="/shop" className="flex flex-row items-center font-semibold">
        Shop now <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default Discount;
