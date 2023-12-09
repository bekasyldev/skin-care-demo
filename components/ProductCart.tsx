import { db } from "@/lib/db";
import Image from "next/image";

const ProductCart = async () => {
  const carts = await db.cart.findMany({
    include: {
      product: {
        select: {
          imageUrl: true,
          price: true,
          title: true,
        },
      },
    },
  });
  return (
    <div>
      {carts.map((cart) => (
        <div className="flex felx-row" key={cart.id}>
          <Image
            src={`/${cart.product.imageUrl}.png`}
            alt={cart.product.imageUrl}
            width={80}
            height={96}
          />
          <p className=" flex-wrap ml-2">{cart.product.title}</p>
          <span className="font-semibold">${cart.product.price}.00</span>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
