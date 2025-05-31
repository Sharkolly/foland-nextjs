import type { NextRequest } from "next/server";
import {  NextResponse } from "next/server";

export function middleware (req: NextRequest) {
  console.log(req)
  const token = req.cookies.get("token")?.value;
  // const protectedRoutes = [
  //   "dashboard",
  //   "profile",
  //   "properties",
  //   "add-property",
  //   "settings",
  //   "chats",
  //   "saved-properties",
  // ];

  // const guestOnlyRoutes = ["login", "signup"];

  // const pathName = req.nextUrl.pathname;

  // if (protectedRoutes.some((route) => pathName.startsWith(route)) && !token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  console.log("middleware", token)
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  // if (guestOnlyRoutes.includes(pathName) && token) {
  //   return NextResponse.redirect(new URL("/properties", req.url));
  // };
  return NextResponse.next();
};



export const config = {
  matcher: ['/:path*',],  
}