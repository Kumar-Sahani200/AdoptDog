import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 ">
      <div className="container mx-auto p-8 bg-[#fef0e0] rounded-md shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-2">
            We are an organization dedicated to helping people adopt dogs and
            facilitating the adoption process for street dogs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-blue-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to connect loving homes with dogs in need. We
              strive to make the adoption process simple and rewarding for both
              the adopter and the dog.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Adoption Process
            </h3>
            <p className="text-gray-700">
              We help individuals navigate the adoption process, providing
              support and guidance. If you are interested in adopting a street
              dog, you can fill out our adoption form to start the journey.
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-3">
              Get Involved
            </h3>
            <p className="text-gray-700">
              Whether you want to adopt, volunteer, or support our cause, there
              are many ways to get involved. Join us in making a positive impact
              on the lives of dogs and the people who love them.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Additional Details
          </h3>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              <strong>Description:</strong> Building network for adoption of
              dogs, cats, rabbits, squirrel. You can share pictures and location
              where the animal was found, your contact details, and other
              details you know about that animal.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              We are presently working in locations in Durgapur, for example,
              Bidhannagar or Bidhannagar market to be more precise.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              <strong>Pre-Adoption:</strong> Details we need for searching the
              potential family for the animal, like in which situation the
              animal was found, whether it was injured, and other relevant
              information.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              <strong>Post-Adoption:</strong> Please don&apos;t abandon the dogs
              you adopt, as dogs are territorial and other dogs may cause
              serious harm while you relocate or abandon them.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              <strong>Pre-Adoption Care:</strong> If you are feeding the puppy
              or the dog, did you deworm or vaccinate the dogs? Provide details
              about the dates of vaccination and deworming.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              Shelters provide wonderful services like deworming, vaccinating,
              and sterilizing before promoting a dog or cat for adoption.
              Durgapur{" "}
              <span>
                <Link
                  href="https://www.instagram.com/aashrayforanimals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:bg-gray-200"
                >
                  Aashray For Animals
                </Link>
              </span>{" "}
              is the NGO based in A-Zone Durgapur with another branch for ABC
              and other surgeries in B-Zone.
            </p>
          </div>
          <div className="bg-[#fff3e5] p-6 rounded-md shadow-md mt-4">
            <p className="text-gray-700">
              <strong>Contact Details:</strong>
              <br />
              Saheli Bishnu
              <br />
              Email:{" "}
              <Link
                href={"saheli.bishnu@gmail.com"}
                className="hover:underline hover:bg-gray-200"
              >
                saheli.bishnu@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
