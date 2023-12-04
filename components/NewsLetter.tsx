import Image from "next/image";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const NewsLetter = () => {
  return (
    <section className="h-[360px] relative">
      <Image
        className="block z-0"
        src={"/banner-letter.png"}
        alt="banner"
        width={1440}
        height={360}
      />
      <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-center z-10">
        <h3 className="text-3xl font-semibold">Join Our NewsLetter</h3>
        <p>Sign up for deals, new products and promotions</p>
        <div>
          <Label htmlFor="email" />
          <Input id="email" placeholder="Email address" />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
