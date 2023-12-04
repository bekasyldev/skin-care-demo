import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="h-[50vh] bg-black">
      <MaxWidthWrapper className="px-40 py-20">
        <div className="flex flex-col text-white">
          <div className="grid grid-rows-2">
            <div>
              <h3 className="text-2xl font-semibold">AceDrive</h3>
              <p>More than just a game. It’s a lifestyle.</p>
            </div>
          </div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
