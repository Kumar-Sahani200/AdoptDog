import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AboutEngineer = () => {
  return (
    <div className="my-20">
      {" "}
      <h3 className="text-3xl font-semibold text-gray-800 mb-3 font-nova_slim text-center">
        Engineers Behind Adopt Paw
      </h3>
      <div className=" mt-8 flex max-w-4xl mx-auto justify-center">
        <div>
          <Link href={"https://sahani.vercel.app/"} target="_blank">
            <Image
              src={"/images/profile-img.png"}
              alt="Your Image Alt Text"
              width={1600}
              height={1600}
              objectFit="cover"
              className="w-2/4 h-full lg:w-full xl:w-2/3 object-cover rounded-2xl mx-auto shadow-md hover:scale-105 transition duration-300"
            />
          </Link>
        </div>

        <div className="pt-3 hidden lg:block xl:block ">
          <h2 className="border-l-2 pl-6 text-lg mb-4 italic border-primary">
            I believe in <span className="text-primary">“Perseverance,” </span>
            because it always seems impossible until it is done!
          </h2>
          <p className="text-lg font-sans font-light">
            Hailing from Hyderabad, India, I&apos;m a dedicated software
            engineer with a bachelor&apos;s degree in AIML{" "}
            <Link href={"https://sahani.vercel.app/"} target="_blank">
              <span className="text-primary bg-secondary px-1 rounded-md hover:underline">
                click here to know more about me
              </span>
            </Link>
            <br />
            &quot;I&apos;ve always dreamed of doing something for these innocent
            souls and with the skills in hand, I feel it to be more of
            responsiblity than ever before&quot;
          </p>
        </div>
      </div>
      <div className="p-8 block lg:hidden xl:hidden">
        <h2 className="border-l-2 pl-6 text-lg mb-4 italic border-primary">
          I believe in <span className="text-primary">“Perseverance,” </span>
          because it always seems impossible until it is done!
        </h2>

        <p className="text-lg font-sans font-light">
          Hailing from Hyderabad, India, I am a dedicated software engineer with
          a bachelor&apos;s degree in AIML{" "}
          <Link href={"https://sahani.vercel.app/"} target="_blank">
            <span className="text-primary bg-secondary px-1 rounded-md hover:underline">
              click here to know more about me
            </span>
          </Link>
          <br />
          &quot;I&apos;ve always dreamed of doing something for these innocent
          souls and with the skills in hand, I feel it to be more of
          responsiblity than ever before&quot;
        </p>
      </div>
    </div>
  );
};
