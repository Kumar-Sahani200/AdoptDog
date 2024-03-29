import React from "react";
import Link from "next/link";
import { AboutEngineer } from "@/components/aboutEngineer";
import { AboutBackbone } from "@/components/aboutBackbone";

export const metadata = {
  title: "About us",
  description: "The official Adopt Paw page, build for pet adoption and more",
};

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 ">
      <div className="container mx-auto p-8 bg-[#fef0e0] rounded-md shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-primary font-emblema_one">
            About Us
          </h2>
          <p className="text-primary mt-2 font-nova_slim text-lg">
            We are a group of people dedicated to helping heroes like you adopt
            pets and facilitating the adoption process for street and sheltered
            animals
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-blue-100 p-6 rounded-md shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 text-justify">
              Our mission is to connect loving homes with animals in need,
              simplifying and rewarding the adoption process for both adopters
              and pets.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-md shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Adoption Process
            </h3>
            <p className="text-gray-700 text-justify">
              Explore a variety of adorable pets - from playful kittens and
              cuddly puppies to mature cats and dogs - all waiting to find their
              perfect match.
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-md shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-3">
              Get Involved
            </h3>
            <p className="text-gray-700 text-justify">
              Search pets with filters, adopt via our platform, upload
              animals&apos; details for adoption, and join our community for a
              positive impact.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <AboutEngineer />
          <AboutBackbone />
          <div className="mb-10 bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] p-6 rounded-md shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-nova_slim text-left">
              Our Goal
            </h3>
            <p className="text-primary text-justify font-nova_slim px-5">
              Building network for adoption, where animals like dogs, cats,
              rabbits, squirrel can be adopted by people who love them
              <br />
              We aim to provide an easy-to-use platform that allows pet lovers
              to adopt Sheltered and Street Animals
              <br />
              Are you an Individual or Volunteer at a shelter? You can now share
              pictures and location where the animal was found along with few
              other details that you know about that animal.
              <br />
              Our platform also allows shelters to link their site while posting
              details of their sheltered pets, which then can be used for
              donation and endorsement purposes.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] p-6 rounded-md shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-nova_slim text-left">
              Our Vision
            </h3>
            <p className="text-primary text-justify font-nova_slim px-5">
              Ofcourse, we don&apos;t just want to help get animals adopted but
              erradicate the problem from it&apos;s root!
              <br />
              We decided to do so by breaking down the problem into smaller
              parts and this platform is one such small solution. We are working
              to build an eco system, were people can get instant animalcare
              support without worrying about finanance, reduce street/sheltered
              animal count by helping them get adopted and help Shelters get
              donation via our platform and a lot more.
            </p>
          </div>

          <div className="mb-10 shadow-md hover:scale-105 transition duration-300 bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] p-6 rounded-md ">
            <div className="text-primary ">
              <strong className="font-nova_slim text-2xl">
                Developer&apos;s Details:
              </strong>
              <br />
              <div className="px-5 mt-2">
                Kumar Sahani
                <br />
                Email:{" "}
                <Link
                  href={"mailto:Kumarsahani@gmail.com"}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  Kumarsahani@gmail.com
                </Link>
                <br />
                Contact:
                <Link
                  href={`https://www.linkedin.com/in/kumar-sahani/`}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  LinkedIn,
                </Link>
                <Link
                  href="https://wa.me/8143916500"
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  Whatsapp
                </Link>
                <Link
                  href={`https://www.instagram.com/schrodinger_mind/`}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  Instagram
                </Link>
                <br />
                Site:{" "}
                <Link
                  href={"https://sahani.vercel.app/"}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  sahani.vercel.app
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-10 shadow-md hover:scale-105 transition duration-300 bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] p-6 rounded-md ">
            <div className="text-primary ">
              <strong className="font-nova_slim text-2xl">Support:</strong>
              <br />

              <div className="px-5 mt-2">
                Saheli Bishnu
                <br />
                Email:{" "}
                <Link
                  href={"mailto:saheli.bishnu@gmail.com"}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  saheli.bishnu@gmail.com
                </Link>
                <br />
                Contact:
                <Link
                  href={`https://www.linkedin.com/in/saheli-bishnu/`}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <Link
                  href={`https://www.instagram.com/saheli.bishnu/?utm_source=qr&r=nametag`}
                  className="hover:underline hover:bg-secondary px-1"
                  target="_blank"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
