import { useRef } from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";
import LazyLoad from "react-lazy-load";

function HomePage() {
  const faqRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className="overflow-hidden">
      <div className="absolute z-30 flex h-screen w-full flex-col ">
        <div className="mt-[15vw] flex flex-col items-center">
          <h1 className="mt-12 text-center text-4xl font-black text-white md:mt-0 md:text-6xl lg:text-8xl">
            WESTERN ESPORTS
          </h1>
          <h1 className="mt-5 text-center text-4xl font-black text-white md:text-6xl lg:text-8xl">
            GAMING ASSOCIATION
          </h1>
          <h3 className="mt-5 text-center text-xl font-extralight text-white md:text-2xl">
            Western University's largest gaming society
          </h3>
          <div>
            <button
              className="z-0 mt-10 flex h-20 w-40 flex-col items-center justify-evenly rounded-full md:mt-28 lg:mt-40"
              style={{
                backgroundColor: "rgba(0,0,0,.7)",
              }}
              onClick={() => {
                faqRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="font-extralight text-white">Learn More</div>
              <img
                src="/downarrow.png"
                width={20}
                className="mx-2 animate-bounce"
              />
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/Hero.png"}
        alt="WEGA"
        width={2048}
        height={1365}
        className="z-0 max-h-[90vh] min-h-[50vh] animate-imageanim"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div
        ref={faqRef}
        className="absolute flex h-screen w-full flex-col bg-black"
      >
        <div className="mt-32 flex flex-col items-center">
          <h1 className="text-8xl font-black text-white underline decoration-purple-600">
            FAQ
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
