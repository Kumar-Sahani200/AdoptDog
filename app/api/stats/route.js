import dbConnect from "@/lib/db/dbConnect";
import formmodel from "@/lib/Models/form.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const totalPets = await formmodel.countDocuments();
    const uniqueCities = await formmodel.distinct("city");
    const uniqueUsers = await formmodel.distinct("clerkUserID");

    console.log(`Total Pets: ${totalPets}`);
    console.log(`Unique Cities: ${uniqueCities.length}`);
    console.log(`Unique Users: ${uniqueUsers.length}`);

    return NextResponse.json(
      {
        totalPets,
        totalCities: uniqueCities.length,
        totalUsers: uniqueUsers.length,
      },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch stats" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
