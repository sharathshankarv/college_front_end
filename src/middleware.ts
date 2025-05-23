import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_ROUTES = ["/", "/about"]; // Add more public paths as needed

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Read token from cookie
  const token = request.cookies.get("token")?.value;

  if (!token) {
    // No token → redirect to home (or login)
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify token using the same secret as backend
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (err) {
    // Invalid token → redirect to home (or login)
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/courses"], // Protect these routes
};
