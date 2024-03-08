import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

import { UserButton } from "@clerk/nextjs";

import { auth } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const menus = [
  { title: "Home", path: "/" },
  { title: "PreAdopt", path: "/preadopt" },
  { title: "About Us", path: "/aboutus" },
  { title: "Post", path: "/post" },
];

export async function Navbar() {
  const { userId } = auth();

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#fef0e0] dark:bg-gray-800">
      <Link className="flex items-center gap-2" href="/">
        <h1 className="text-3xl font-bold text-[#ff8802]">
          Adopt <span className="text-[#723225]">Paw</span>
        </h1>
      </Link>
      <div className="hidden lg:flex gap-4 ">
        <div className="flex justify-center mx-auto gap-x-2">
          {menus.map((item, index) => (
            <Button
              className="text-lg text-black bg-[#fef0e0] font-medium hover:underline underline-offset-4"
              key={index}
            >
              <Link href={item.path}>{item.title}</Link>
            </Button>
          ))}
        </div>
        <SignedIn>
          <div>
            <div className="flex justify-center mx-auto gap-x-5">
              <Button className="w-fit bg-secondary text-primary hover:text-secondary hover:bg-primary">
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <div className="mt-1">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex justify-center mx-auto gap-x-5">
            <Button className="w-fit bg-primary hover:text-primary hover:bg-secondary">
              {/* <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink> */}
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
            <Button className="w-fit bg-secondary text-primary hover:text-secondary hover:bg-primary">
              {/* <RegisterLink>Sign up</RegisterLink> */}
              <Link href={"/sign-up"}>Sign up</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4 mt-5">
            {menus.map((item, index) => (
              <Link
                key={index}
                className="text-xl font-medium hover:underline underline-offset-4 mb-2.5"
                href={item.path}
              >
                {item.title}
              </Link>
            ))}

            <SignedIn>
              <div>
                <div className="flex justify-center mx-auto gap-x-5 mt-5">
                  <Button className="w-fit bg-secondary text-primary hover:text-secondary hover:bg-primary">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </Button>
                  <div className="mt-1">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex justify-center mx-auto gap-x-5 mt-5">
                <Button className="w-fit bg-primary hover:text-primary hover:bg-secondary">
                  {/* <LoginLink>Sign in</LoginLink> */}
                  <Link href={"/sign-in"}>Sign in</Link>
                </Button>
                <Button className="w-fit bg-secondary text-primary hover:text-secondary hover:bg-primary">
                  {/* <RegisterLink>Sign up</RegisterLink> */}
                  <Link href={"/sign-up"}>Sign up</Link>
                </Button>
              </div>
            </SignedOut>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
