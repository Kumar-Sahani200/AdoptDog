// pages/api/createUser.ts

import dbConnect from "@/lib/db/dbConnect";
import user from "@/lib/Models/user";

export async function GET() {
  try {
    const res = await dbConnect();
    console.log(res);

    return new Response(
      JSON.stringify({ message: "DB Connected successfully" })
    );
  } catch (error) {
    // If connection fails, send error responses
    return new Response(JSON.stringify({ message: "Failed to connect DB" }));
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const { firstName, lastName, email, clerkUserID } = await req.json();
    console.log(firstName, lastName, email, clerkUserID);

    // Create a new user
    const newUser = new user({
      firstName,
      lastName,
      email,
      clerkUserID,
    });

    // Save the user to the database
    await newUser.save();

    // console.log(result);

    return new Response(
      JSON.stringify(
        { message: "Posted user data to db successfully " },
        { staus: 201 }
      )
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to Post User data to DB" })
    );
  }
}
