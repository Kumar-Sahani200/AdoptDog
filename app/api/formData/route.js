import dbConnect from "@/lib/db/dbConnect";
import formmodel from "@/lib/Models/form.js";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId } = auth();
  const clerkUserID = userId;

  // if (!userId) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Failed to Post, sign in or register first",
  //     })
  //   );
  // }

  try {
    await dbConnect();

    const data = await req.json();
    const formdata = { clerkUserID, ...data };

    // await formmodel.create(formdata);

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
