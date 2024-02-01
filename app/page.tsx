import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex flex-col place-items-center">
          <h2 className="text-5xl font-semibold mb-10">
            Durgapur Animal Adoption
          </h2>
          <p className="m-0 max-w-[80ch] text-xl">
            Building network for adoption of dogs, cats, rabbits, squirrel
          </p>

          <Image
            src={"/images/dogs.jpg"}
            width={1200}
            height={400}
            alt="step1"
            className="mt-8 mb-8 mx-auto xl:h-80 lg:h-80 md:h-60  w-auto sm:h-48 border-5 rounded-lg border-solid border-ffe03d"
          />

          <div className="relative flex flex-col place-items-center">
            <p className="m-0 max-w-[80ch] text-xl mb-5">
              We all want to grow up to be responsible family for the dogs or
              cats we adopt
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
