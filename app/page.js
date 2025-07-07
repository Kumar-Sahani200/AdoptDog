import Image from "next/image";
import HeroGallery from "@/components/herogallery";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Youtube from "@/components/shortcuts/Youtube";
import { FAQ } from "@/components/shortcuts/Faq";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex flex-col place-items-center">
          <h2 className="text-5xl font-semibold mb-10 font-emblema_one text-secondary-foreground">
            Pet
            <span className="text-secondary"> Adoption </span>
            Made Easy!
          </h2>

          <p className="m-0 max-w-[80ch] text-3xl font-bubblegum_sans text-secondary-foreground">
            Building network for adoption of dogs, cats, rabbits, squirrel and
            more
          </p>

          <p className="m-0 max-w-[80ch] text-3xl font-bubblegum_sans text-secondary-foreground">
            Find Your Furry Friend and Make a Difference
          </p>
          <div>
            <Button className="text-white font-extrabold w-fit bg-secondary hover:text-secondary hover:bg-primary my-5">
              <Link href={"/adopt"} className="flex items-center">
                <p className="pr-2">Adopt a Pet {"  "} </p> <FaArrowRight />
              </Link>
            </Button>
          </div>

          <Youtube />

          <Stats />

          <HeroGallery />

          <FAQ />
        </div>
      </main>
    </div>
  );
}
