import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "";

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id, ...attributes } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case "user.created": {
      const firstName = evt.data.first_name;
      const lastName = evt.data.last_name;
      const email = evt.data.email_addresses[0].email_address;
      const clerkUserID = evt.data.id;

      const UserData = {
        firstName,
        lastName,
        email,
        clerkUserID,
      };
      console.log("Logging from api/webhooks/users:");
      console.log(UserData);

      // making a post request to createUser.ts with the above data
      const response = await fetch(`${process.env.DomainURL}/api/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Failed to create user:", errorMessage);
      } else {
        const responseData = await response.json();
        console.log("User created successfully:", responseData);
      }
      break;
    }

    case "user.deleted": {
      const clerkUserID = evt.data.id;
      console.log(`User with ID ${clerkUserID} Deleted`);
    }
    default:
      // Handle other event types if needed
      break;
  }

  // console.log(attributes);
  // console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  // console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
