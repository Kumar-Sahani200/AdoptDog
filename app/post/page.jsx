"use client";

import React, { useState, useRef } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { useToast } from "@/components/ui/use-toast";

const AdoptionForm = () => {
  const { toast } = useToast();

  const userNameRef = useRef("");
  const phoneNoRef = useRef("");
  const petNameRef = useRef("");
  const petTypeRef = useRef("Dog");
  const ageRangeRef = useRef("Puppy");
  const genderRef = useRef("Male");
  const isDisabledRef = useRef("No");
  const isVacinatedRef = useRef("No");
  const breadNameRef = useRef(null);
  const shelterOrStreetRef = useRef("Shelter");
  const shelterURLRef = useRef(null);
  const cityRef = useRef("");
  const stateRef = useRef("");
  const localityRef = useRef("");

  const [file, setFile] = useState(null);
  // const imageInputRef = useRef(file);

  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);

  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("Dog");
  const [ageRange, setAgeRange] = useState("Puppy");
  const [gender, setGender] = useState("Male");
  const [isDisabled, setIsDisabled] = useState("No");
  const [isVacinated, setIsVacinated] = useState("No");
  const [isAdopted, setIsAdopted] = useState(false);
  const [breadName, setBreadName] = useState(null);
  const [petImageURL, setPetImageURL] = useState(null);
  const [shelterOrStreet, setShelterOrStreet] = useState("Shelter");
  const [shelterURL, setShelterURL] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await petImageURL;

    const formData = {
      userName,
      phoneNo,
      petName,
      petType,
      gender,
      isDisabled,
      isVacinated,
      ageRange,
      isAdopted,
      breadName,
      petImageURL,
      shelterOrStreet,
      shelterURL,
      city,
      state,
      locality,
    };

    if (petImageURL) {
      const response = await fetch(`${process.env.DomainURL}/api/formData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Failed to upload image", errorMessage);
      } else {
        const responseData = await response.json();
        console.log("Image uploaded successfully:", responseData);

        // Clearing Form Data
        userNameRef.current.value = "";
        phoneNoRef.current.value = "";
        petNameRef.current.value = "";
        petTypeRef.current.value = "Dog";
        ageRangeRef.current.value = "Puppy";
        genderRef.current.value = "Male";
        isDisabledRef.current.value = "No";
        isVacinatedRef.current.value = "No";
        breadNameRef.current.value = null;
        shelterOrStreetRef.current.value = "Shelter";
        shelterURLRef.current.value = null;
        cityRef.current.value = "";
        stateRef.current.value = "";
        localityRef.current.value = "";
        setProgress(0);
        setPetImageURL(null);
        setFile(null);

        toast({
          title: "Hurrayyy!",
          description: "You just helped someone find their happiness",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h2 className="text-4xl text-center font-extrabold text-[#723225] my-6">
          Pet Adoption Post
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="Username"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Your Name
            </label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              ref={userNameRef}
              type="text"
              id="Username"
              name="Username"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Your Phone No
            </label>
            <input
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              ref={phoneNoRef}
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid phone number"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Pet&apos;s Name
            </label>
            <input
              onChange={(e) => {
                setPetName(e.target.value);
              }}
              ref={petNameRef}
              type="text"
              id="dogname"
              name="dogname"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="petType"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Pet Type
            </label>
            <select
              onChange={(e) => {
                setPetType(e.target.value);
              }}
              ref={petTypeRef}
              id="petType"
              name="petType"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            >
              <option value="Dog" className="">
                Dog
              </option>
              <option value="Cat">Cat</option>
              <option value="Cow">Cow</option>
              <option value="Rabbits">Rabbit</option>
              <option value="Squirrel">Squirrel</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="petGender"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Pet Gender
            </label>
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              ref={genderRef}
              id="petGender"
              name="petGender"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="petGender"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Vacinated
            </label>
            <select
              onChange={(e) => {
                setIsVacinated(e.target.value);
              }}
              ref={isVacinatedRef}
              id="isVacinated"
              name="isVacinated"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="petGender"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Disabled
            </label>
            <select
              onChange={(e) => {
                setIsDisabled(e.target.value);
              }}
              ref={isDisabledRef}
              id="isDisabled"
              name="isDisabled"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="breadName"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Bread Name (optional)
            </label>
            <input
              onChange={(e) => {
                setBreadName(e.target.value);
              }}
              ref={breadNameRef}
              type="text"
              id="breadName"
              name="breadName"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Pet Age Range (approx)
            </label>
            <select
              onChange={(e) => {
                setAgeRange(e.target.value);
              }}
              ref={ageRangeRef}
              id="age"
              name="age"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
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
              className="mb-2 block text-[#723225] font-semibold"
            >
              From Shelter / Street
            </label>
            <select
              onChange={(e) => {
                setShelterOrStreet(e.target.value);
              }}
              ref={shelterOrStreetRef}
              id="shelterorstreet"
              name="shelterorstreet"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              required
            >
              <option value="Shelter">Shelter</option>
              <option value="Street">Street</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="websiteLink"
              className="mb-2 block text-[#723225] font-semibold"
            >
              If sheltered, enter shelter&apos;s website Link (optional)
            </label>
            <input
              onChange={(e) => {
                setShelterURL(e.target.value);
              }}
              ref={shelterURLRef}
              type="url"
              id="websiteLink"
              name="websiteLink"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
              pattern="https?://(?:www\.)?[^.]+\.[a-zA-Z]{2,}(?:\/\S*)?$"
              title="Please enter a valid URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="mb-2 block text-[#723225] font-semibold"
            >
              Pet Location
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                ref={cityRef}
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
                required
              />
              <input
                onChange={(e) => {
                  setState(e.target.value);
                }}
                ref={stateRef}
                type="text"
                id="state"
                name="state"
                placeholder="State"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
                required
              />
              <input
                onChange={(e) => {
                  setLocality(e.target.value);
                }}
                ref={localityRef}
                type="text"
                id="locality"
                name="locality"
                placeholder="Locality"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-[#723225] text-[#723225]"
                required
              />
            </div>
          </div>

          <div>
            <SingleImageDropzone
              width={200}
              height={200}
              value={file}
              onChange={(file) => {
                setFile(file);
              }}
              required
              // ref={imageInputRef}
            />

            <div className="h-[6px] w-48 border rounded overflow-hidden">
              <div
                className="h-full bg-[#ff8802] transition-all duration-150"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <button
              className=" w-fit py-1 px-2 rounded-lg mt-2 border border-[#ff8802]"
              onClick={async () => {
                if (file) {
                  const res = await edgestore.myPublicImages.upload({
                    file,
                    onProgressChange: (progress) => {
                      setProgress(progress);
                      console.log(progress);
                    },
                  });

                  setPetImageURL(res.url);
                }
              }}
            >
              {progress === 100 ? (
                <div className="text-green-700">Upload 100% complete</div>
              ) : (
                <div>
                  {progress > 1 ? (
                    <div className="text-red-700">Uploading {progress} %</div>
                  ) : (
                    <div>Upload</div>
                  )}
                </div>
              )}
            </button>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#723225] text-[#ff8802] hover:text-[#723225] px-4 py-2 rounded-xl hover:bg-[#ff8802] focus:outline-none focus:shadow-md w-full"
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
