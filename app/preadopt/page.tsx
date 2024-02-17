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

export default function ProductCard() {
  return (
    <div>
      <div className="pl-5 pr-5 mt-20 w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2
          className={` md:text-[30px] sm:text-[30px] xs:text-[30px] text-[30px] text-black xs:leading-[32px] leading-[28px] w-full mx-auto text-center font-sans font-semibold`}
        >
          Many happy faces are waiting to be part of your family
        </h2>
      </div>
      <div className="container mx-auto flex justify-center mb-40">
        <div className=" mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-r from-[#c3bcbc] to-[#f3f3f5] max-w-md rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <CardHeader className="relative p-0">
              <div className="overflow-y-scroll h-60">
                <Image
                  width={2000}
                  height={2000}
                  src="/images/Tingi.jpeg"
                  alt="Product Image"
                  className="w-full bg-contain bg-center "
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-[#6d6d6d] to-[#11101d] p-1 text-white opacity-22">
                Drugapur
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2  font-sans font-light">
                Name: Tingi
              </CardTitle>
              <CardDescription className="text-black mb-4 font-sans font-light">
                <span className="font-bold">Vacinated: </span>
                Yes
                <br />
                <span className="font-bold">Bread: </span>
                indi
                <br />
                <span className="font-bold">Gender: </span>
                Female
                <br />
                <span className="font-bold">Disabled: </span>
                Yes - No Right Leg
                <br />
                <span className="font-bold">Shelter/Street: </span>
                Shelter - Aashray For Animals
                <br />
              </CardDescription>

              <CardFooter className="px-1 py-4 mx-auto flex justify-between">
                <AlertRepo />
                <Link
                  target="_blank"
                  href={"https://aashrayforanimals.org.in/"}
                  className="bg-[#6d6d6d] hover:bg-[#11101d] text-white text-sm  py-2 px-3 rounded-full"
                >
                  Donate to the Shelter
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
