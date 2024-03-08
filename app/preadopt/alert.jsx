import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlertRepo(prop) {
  const phoneno = "tel:+91" + String(prop.phoneno);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#6d6d6d] hover:bg-[#11101d] text-white text-sm  py-2 px-3 rounded-full">
          Contact
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact {`${prop.name}`} now</AlertDialogTitle>
          <AlertDialogDescription>
            Please be petient and clear in your message, calls are accepted
            between Monday to Friday
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <Link
          href={phoneno}
          className="mx-auto bg-black w-full py-3 text-white text-center"
          target="_blank"
        >
          Call
        </Link>

        {/* <AlertDialogFooter>
          <AlertDialogAction></AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
