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

const getData = async () => {
  try {
    const res = await fetch(`${process.env.DomainURL}/api/formData`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch  data");
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading the data", error);
  }
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
            <Card
              key={index}
              className="bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] max-w-md rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
            >
              <CardHeader className="relative p-0">
                <div className="overflow-y-scroll h-60">
                  <Image
                    width={2000}
                    height={2000}
                    src={pet.petImageURL}
                    alt="Product Image"
                    className="w-full bg-contain bg-center "
                  />
                </div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-r from-primary to-secondary px-2 py-1 text-white opacity-22 rounded-xl font-nova_slim">
                  {pet.city} - {pet.locality}
                </div>
              </CardHeader>
              <CardContent className="py-4 px-8 ">
                <CardTitle className="text-xl mb-2 font-bold font-nova_slim text-center mx-auto">
                  Name: {pet.petName}
                </CardTitle>
                <CardDescription className="text-black mb-4 font-nova_slim text-md">
                  <span>Vacinated - </span>
                  {pet.isVacinated}
                  <br />
                  <span>Bread - </span>
                  {pet.breadName ? pet.breadName : "Not provided"}
                  <br />
                  <span>Gender - </span>
                  {pet.gender}
                  <br />
                  <span>Disabled - </span>
                  {pet.isDisabled}
                  <br />
                  <span>Shelter/Street - </span>
                  {pet.shelterOrStreet}
                  <br />
                  <span>Age Group - </span>
                  {pet.ageRange}
                  <br />
                </CardDescription>
                <CardFooter className="px-1 py-4 mx-auto flex justify-between">
                  {pet.shelterURL ? (
                    <>
                      <AlertRepo phoneno={`${pet.phoneNo}`} name={`Shelter`} />
                      <Link
                        target="_blank"
                        href={pet.shelterURL}
                        className="bg-primary hover:bg-secondary text-white hover:text-black text-sm  py-2 px-3 rounded-full"
                      >
                        Donate
                      </Link>
                    </>
                  ) : (
                    <div>
                      <AlertRepo
                        phoneno={`${pet.phoneNo}`}
                        name={`${pet.userName}`}
                      />
                    </div>
                  )}
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
