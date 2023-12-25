import ProductCount from "@/components/product/product-count";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import Image from "next/image";

const ProductTable: React.FC = async () => {
  const carts = await db.cart.findMany({
    include: {
      product: {
        select: {
          id: true,
          imageUrl: true,
          price: true,
          title: true,
        },
      },
    },
  });

  return (
    <div className="flex-[1.5]">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="font-semibold text-left">Product</th>
            <th className="font-semibold">Quantity</th>
            <th className="font-semibold">Price</th>
            <th className="font-semibold">Subtotal</th>
          </tr>
        </thead>
        <div className="my-4 w-full">
          <Separator className="bg-gray-400 w-full" />
        </div>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.productId}>
              <td className="flex items-center gap-x-4">
                <Image
                  src={`/${cart.product.imageUrl}.png`}
                  alt={cart.product.imageUrl}
                  width={80}
                  height={96}
                />
                <p>{cart.product.title}</p>
              </td>
              <td className="pl-20">
                <ProductCount quantity={cart.quantity} id={cart.productId} />
              </td>
              <td className="text-center">{cart.product.price}$</td>
              <td className="text-center font-semibold">
                {cart.product.price * cart.quantity}$
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
