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

//This component is for showing pop up alert when clicked on Contact
export default function CallAlert(prop) {
  const phoneno = "tel:+91" + String(prop.phoneno);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary hover:bg-secondary text-white hover:text-black text-sm  py-2 px-3 rounded-full">
          Contact
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#fef0e0] rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary font-nova_slim text-center text-xl">
            Contact {`${prop.name}`} now
          </AlertDialogTitle>
          <AlertDialogDescription className="text-primary font-nova_slim">
            Please be petient and clear in your message, calls are suggested to
            between Monday to Friday - 11am to 5pm IST
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel className="bg-primary text-secondary  hover:bg-secondary hover:text-primary">
          Cancel
        </AlertDialogCancel>
        <Link
          href={phoneno}
          className="mx-auto bg-secondary text-lg w-full py-3 text-primary text-center hover:bg-primary hover:text-secondary"
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
