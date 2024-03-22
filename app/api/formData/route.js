import dbConnect from "@/lib/db/dbConnect";
import formmodel from "@/lib/Models/form.js";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

//This API end point post a form data submited by the singed in User
export async function POST(req) {
  const { userId } = auth();
  const clerkUserID = userId;

  try {
    await dbConnect();

    const data = await req.json();
    const formdata = { clerkUserID, ...data };

    const newForm = new formmodel(formdata);
    await newForm.save();

    console.log(formdata);

    return new Response(
      JSON.stringify({ message: "Posted Form Data to the db successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to Post form data to the DB" }, error)
    );
  }
}

//This API end point gets all the posts that were posted by all users
export async function GET() {
  try {
    await dbConnect();

    const data = await formmodel.find();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: "failed to fetch data from the to db",
    });
  }
}
