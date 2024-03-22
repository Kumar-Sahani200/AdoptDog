import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AboutBackbone = () => {
  return (
    <div className="my-20">
      {" "}
      <h3 className="text-3xl font-semibold text-gray-800 mb-3 font-nova_slim text-center">
        The Backbone of Adopt Paw
      </h3>
      <div className=" mt-8 flex max-w-4xl mx-auto justify-center">
        <div className="lg:mr-5 md:mr-5">
          <Link
            href={"https://www.linkedin.com/in/saheli-bishnu/"}
            target="_blank"
          >
            <Image
              src={"/images/Saheli-Bishnu.jpg"}
              alt="Your Image Alt Text"
              width={1600}
              height={1600}
              objectFit="cover"
              className="w-2/4 h-full lg:w-full xl:w-2/3 object-cover rounded-2xl mx-auto shadow-md hover:scale-105 transition duration-300"
            />
          </Link>
        </div>

        <div className="pt-3 hidden lg:block xl:block">
          <h2 className="border-l-2 pl-6 text-lg mb-4 italic border-primary">
            “We accept the <span className="text-primary">love </span> we think
            we <span className="text-primary">deserve</span>” ― Stephen Chbosky,
            The Perks of Being a Wallflower
          </h2>
          <p className="text-lg font-sans font-light">
            Born and brought up in Durgapur, West Bengal. I love to work in the
            intersection of human beings and animals to preserve co-existence.
            <br />
            <Link
              href={"https://www.linkedin.com/newsletters/7024429871434981376/"}
              target="_blank"
            >
              <span className="text-primary bg-secondary px-1 rounded-md hover:underline">
                click here to know more about me
              </span>
            </Link>
            <br />
            &quot;Let everyone who is caring and nurturing community animal be
            successful and efficient.&quot;
          </p>
        </div>
      </div>
      <div className="p-8 block lg:hidden xl:hidden">
        <h2 className="border-l-2 pl-6 text-lg mb-4 italic border-primary">
          “We accept the <span className="text-primary">love </span> we think we{" "}
          <span className="text-primary">deserve</span>” ― Stephen Chbosky, The
          Perks of Being a Wallflower
        </h2>

        <p className="text-lg font-sans font-light">
          Born and brought up in Durgapur, West Bengal. I love to work in the
          intersection of human beings and animals to preserve co-existence.
          <br />
          <Link
            href={"https://www.linkedin.com/newsletters/7024429871434981376/"}
            target="_blank"
          >
            <span className="text-primary bg-secondary px-1 rounded-md hover:underline">
              click here to know more about me
            </span>
          </Link>
          <br />
          &quot;Let everyone who is caring and nurturing community animal be
          successful and efficient.&quot;
        </p>
      </div>
    </div>
  );
};
