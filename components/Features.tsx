import MaxWidthWrapper from "./MaxWidthWrapper";
import Products from "./Products";

const Featured = () => {
  return (
    <section>
      <MaxWidthWrapper className="my-8 space-y-10">
        <div>
          <h2 className="text-3xl font-semibold">Featured</h2>
        </div>
        <div>
          <Products />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Featured;
