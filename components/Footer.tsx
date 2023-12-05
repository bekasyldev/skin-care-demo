import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="h-[66vh] bg-black">
      <MaxWidthWrapper className="px-40 py-16">
        <div className="flex flex-col text-white">
          <div className="grid grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">AceDrive</h3>
              <p className="text-xl">
                More than just a game.
                <br /> It’s a lifestyle.
              </p>
              <div className="flex flex-row gap-x-2">
                <Image
                  src={"/icons/instagram.png"}
                  alt="instagram"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/facebook.png"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/youtube.png"}
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <ul className="space-y-4">
                  <li>Page</li>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Product</li>
                  <li>Articles</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>Info</li>
                  <li>Shiping Policy</li>
                  <li>Shop</li>
                  <li>Return & Refund</li>
                  <li>Support</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>Office</li>
                  <li>43111 Hai Trieu street</li>
                  <li>District 1, HCMC</li>
                  <li>Vietnam</li>
                  <li>84-756-3237</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-20" />
          <div className="py-8 flex flex-row justify-between">
            <div className="flex flex-row items-center text-center text-xs gap-x-2">
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <div className="border-l border-[#424547] h-6"></div>
              <span className="text-[#424547]">Privacy Policy</span>
              <span className="text-[#424547]">Terms & Conditions</span>
            </div>
            <div className="flex flex-row gap-x-2">
              <Image
                src={"/payment/visa.png"}
                alt="visa"
                width={48}
                height={32}
              />
              <Image
                src={"/payment/express.png"}
                alt="express"
                width={48}
                height={32}
              />
              <Image
                src={"/payment/mastercard.png"}
                alt="mastercard"
                width={48}
                height={32}
              />
              <Image
                src={"/payment/paypal.png"}
                alt="paypal"
                width={48}
                height={32}
              />
              <Image
                src={"/payment/apple-pay.png"}
                alt="apple"
                width={48}
                height={32}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
