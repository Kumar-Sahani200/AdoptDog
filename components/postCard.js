"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

//This component shows posts(not adopted) that were posted by a user(for their dashboard)
const PostCard = (props) => {
  const router = useRouter();
  const { pet } = props;

  const { toast } = useToast();

  if (pet.isAdopted == true) {
    return <></>;
  }

  const handleMark = async () => {
    const isAdoptedConfirmed = confirm("Are you sure that the pet is adopted?");

    if (isAdoptedConfirmed) {
      await fetch(
        `${process.env.DomainURL}/api/formData/${pet.clerkUserID}/${pet._id}`,

        {
          method: "PATCH",
        }
      );

      router.refresh();
      toast({
        title: "Hurrayyy!",
        description: "You help save a life",
      });
    }
  };

  const handleDelete = async () => {
    const isDeleteConfirmed = confirm("Are you sure you want to delete?");

    if (isDeleteConfirmed) {
      await fetch(
        `${process.env.DomainURL}/api/formData/${pet.clerkUserID}/${pet._id}`,

        {
          method: "DELETE",
        }
      );

      router.refresh();
      toast({
        title: "Deleted!",
        description: "Your post deleted successfuly",
      });
    }
  };

  return (
    <div>
      <article className="rounded-xl border-2 border-[#f3c897] bg-gradient-to-r from-[#fbf5ee] to-[#f1d7b9] w-8/12 mx-auto hover:scale-105 transform duration-300">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <div className="block shrink-0">
            <Image
              alt=""
              width={1200}
              height={1200}
              src={pet.petImageURL}
              className="size-14 rounded-lg scale-150 object-cover mr-5 "
            />
          </div>

          <div>
            <h3 className="font-medium sm:text-lg font-nova_slim">
              {pet.petName} - {pet.city}
            </h3>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <p className="sm:block text-xs text-gray-500">
                Posted on
                <a href="#" className="font-medium hover:text-gray-700">
                  {" "}
                  {pet.createdAt?.substring(0, 10)}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleMark}
            className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 hover:bg-primary-foreground  px-3 py-1.5 text-white mr-5"
          >
            <div>
              <span className="text-[16px] font-medium sm:text-sm mx-10">
                Mark as Adopted
              </span>
            </div>
          </button>

          <button
            onClick={handleDelete}
            className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-500 hover:bg-red-700 px-3 py-1.5 text-white"
          >
            <div>
              <span className="font-medium">
                <MdDelete />
              </span>
            </div>
          </button>
        </div>
      </article>
    </div>
  );
};

export default PostCard;
