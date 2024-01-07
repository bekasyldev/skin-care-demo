"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

export default function CartButton({ id }: { id: string }) {
  const router = useRouter();
  const onClick = async () => {
    try {
      const response = await axios.post(`/api/products/${id}`);
      router.refresh();
      toast.success("Added to the cart");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Button
      onClick={onClick}
      className="absolute hover:bg-black font-semibold text-xs bottom-2 left-4 bg-black text-white rounded-xl px-20"
    >
      Add to cart
    </Button>
  );
}
