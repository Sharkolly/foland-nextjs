import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard', '/profile','/properties', '/settings'];
const authPages = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  console.log(`📌 Path: ${pathname} | Token: ${token ? "YES" : "NO"}`);

  // Redirect unauthenticated users from protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      console.log("🔒 Redirecting to /login");
      return NextResponse.redirect(new URL('/about', request.url));
    }
  }

  // Redirect authenticated users from auth pages
  if (authPages.includes(pathname) && token) {
    console.log("➡️ Redirecting to /dashboard");
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // All routes except static files
};