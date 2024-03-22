import dbConnect from "@/lib/db/dbConnect";
import formmodel from "@/lib/Models/form.js";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

//This API end point gets all the posts by the  user who is logged in
export async function GET(request, context) {
  const { params } = context;
  const clerkID = params.clerkID;

  try {
    await dbConnect();

    const data = await formmodel.find({
      clerkUserID: clerkID,
    });

    if (data.length == 0) {
      return NextResponse.json(null);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: "failed to fetch Post data from the to db",
    });
  }
}
