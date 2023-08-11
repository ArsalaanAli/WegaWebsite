import Image from "next/image";

function Hero(props: any) {
  return (
    <div>
      <div className="absolute  flex h-screen w-full flex-col ">
        <div className="mt-[4vw] flex flex-col items-center">
          <h1 className="mt-3 text-center text-4xl font-black text-white md:mt-0 md:text-6xl lg:text-7xl">
            {props.title}
          </h1>
        </div>
      </div>
      <Image
        src={"/Hero.png"}
        alt="WEGA"
        width={2048}
        height={1365}
        className="z-0 max-h-[20vh] min-h-[20vh]"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default Hero;
