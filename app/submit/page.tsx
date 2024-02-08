"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdoptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petImage: "",
    city: "",
    state: "",
    locality: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Dog Adoption Form
        </h2>

        <form action="https://formbold.com/s/35eZB" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Your Phone No:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Dog&apos;s Name:
            </label>
            <input
              type="text"
              id="dogname"
              name="dogname"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Dog&apos;s Bread Name:
            </label>
            <input
              type="text"
              id="breedname"
              name="breedname"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Age of the Pet:
            </label>
            <select
              id="age"
              name="age"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="puppy">Puppy</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="shelterorstreet"
              className="mb-2 block text-gray-700 font-semibold"
            >
              From Shelter / Street
            </label>
            <select
              id="shelterorstreet"
              name="shelterorstreet"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="Shelter">Shelter</option>
              <option value="Street">Street</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="mb-2 block text-gray-700 font-semibold"
            >
              Location of the pet:
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                id="locality"
                name="locality"
                placeholder="Locality"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdoptionForm;
