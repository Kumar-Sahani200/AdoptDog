import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AlertRepo from "./alert";
import AdoptCard from "@/components/adoptCard";

const getData = async () => {
  try {
    const res = await fetch(
      `https://adoptadoginindia.vercel.app/api/formData`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch  data");
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading the data", error);
  }
};

export const metadata = {
  title: "Adopt",
  description: "The official Adopt Paw page, build for pet adoption and more",
};

export default async function ProductCard() {
  const pets = await getData();

  return (
    <div>
      <div className="pl-5 pr-5 mt-20 w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="mx-auto text-center text-4xl font-semibold font-emblema_one text-secondary-foreground">
          Many happy faces are waiting to be part of your family
        </h2>
      </div>
      <div className="container mx-auto flex justify-center mb-40">
        <div className=" mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {pets.map((pet, index) => (
            <div key={index}>
              <AdoptCard pet={pet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
