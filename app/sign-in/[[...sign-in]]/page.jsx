import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto justify-center flex mt-20">
      <SignIn />
    </div>
  );
}
