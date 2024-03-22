import { auth } from "@clerk/nextjs";
import PostCard from "@/components/postCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import AdoptedCard from "@/components/adoptedCard";

export const metadata = {
  title: "Dashboard",
  description: "The official Adopt Paw page, build for pet adoption and more",
};

const getData = async () => {
  const { userId } = auth();

  try {
    const res = await fetch(
      `https://adoptadoginindia.vercel.app/api/formData/${userId}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading the data", error);
  }
};

let hasAdoptedPets = 0;

const adopted = async () => {
  const pets = await getData();

  if (pets != null) {
    for (let index = 0; index < pets.length; index++) {
      pets.map((pet, index) => {
        if (pet.isAdopted == true) {
          hasAdoptedPets = hasAdoptedPets + 1;
        }
      });
    }
  }
};

export default async function ProductCard() {
  const pets = await getData();
  await adopted();

  return (
    <div className="min-h-screen py-12">
      <SignedOut>
        <div className="flex justify-center mx-auto gap-x-5">
          Sign-in to see the dashboard!
        </div>
      </SignedOut>
      <SignedIn>
        <div className="container mx-auto p-8 bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] rounded-md shadow-lg">
          <div className="text-center ">
            <h2 className="text-4xl font-extrabold text-gray-800 text-primary font-emblema_one">
              Dashboard
            </h2>
            <p className="text-primary mt-2 font-nova_slim text-lg">
              View, delete and update your posts here
            </p>
          </div>
        </div>

        <div>
          <Tabs defaultValue="posts" className="w-full mx-auto mt-10">
            <TabsList className="mx-auto justify-center flex w-[300px] bg-secondary">
              <TabsTrigger
                value="posts"
                className=" w-full text-primary font-nova_slim"
              >
                Posts
              </TabsTrigger>
              <TabsTrigger
                value="adopted"
                className="w-full text-primary font-nova_slim"
              >
                Adopted
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              {pets ? (
                <div className="mt-14">
                  {pets.map((pet, index) => (
                    <div key={index} className="my-5">
                      <PostCard pet={pet} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-14 mx-auto justify-center">
                  <p className="m-0 max-w-[80ch] text-3xl font-bubblegum_sans text-secondary-foreground text-center mx-auto">
                    Make a Difference and be the Hero for the innocences
                  </p>
                  <div>
                    <Button className="mx-auto flex text-white font-extrabold w-fit bg-secondary hover:text-secondary hover:bg-primary my-5">
                      <Link
                        href={"/adopt"}
                        className="flex items-center text-xl"
                      >
                        <p className="pr-2">Post {"  "} </p> <IoIosAddCircle />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
            <TabsContent value="adopted">
              {pets && hasAdoptedPets > 0 ? (
                <div className="mt-14">
                  {pets.map((pet, index) => (
                    <div key={index} className="my-5">
                      <AdoptedCard pet={pet} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-14 mx-auto justify-center">
                  <p className="m-0 max-w-[80ch] text-3xl font-bubblegum_sans text-secondary-foreground text-center mx-auto">
                    Once you help get a Pet adopted, it will appear here
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </SignedIn>
    </div>
  );
}
