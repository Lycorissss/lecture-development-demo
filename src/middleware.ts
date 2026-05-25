import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Supabase disabled for demo prototype
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
