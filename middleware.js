import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/aboutus",
    "/adopt",
    "/api/webhooks(.*)",
    "/api/createUser",
    "/api/formData",
    "/api/edgestore(.*)",
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  // ignoredRoutes: ["/submit"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
