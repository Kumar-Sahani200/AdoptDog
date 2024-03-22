import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import formmodel from "@/lib/Models/form.js";
import dbConnect from "@/lib/db/dbConnect";

export async function PATCH(request, context) {
  const { params } = await context;
  const { userId } = auth();
  const clerkID = params.clerkID;
  const postID = params.postID;

  try {
    if (userId == clerkID) {
      await dbConnect();

      const update = { isAdopted: true };

      // User is trying to update their post(mark as adopted)
      const res = await formmodel.findByIdAndUpdate(postID, update);

      console.log("hi from the server");
      console.log(res);
      return NextResponse.json(
        { message: "Posted Updated Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json("Error while updating the post", error, {
      status: 501,
    });
  }

  console.log({ clerkID: clerkID });
  console.log({ postID: postID });

  return NextResponse.json({ clerkID, postID });
}

export async function DELETE(request, context) {
  const { params } = await context;
  const { userId } = auth();
  const clerkID = params.clerkID;
  const postID = params.postID;

  try {
    if (userId == clerkID) {
      await dbConnect();

      // User is trying to update their post(mark as adopted)
      const res = await formmodel.findByIdAndDelete({ _id: postID });
      console.log(res);

      return NextResponse.json(
        { message: "Deleted Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json("Error while deleting the post", error, {
      status: 501,
    });
  }

  console.log({ clerkID: clerkID });
  console.log({ postID: postID });

  return NextResponse.json({ clerkID, postID });
}
