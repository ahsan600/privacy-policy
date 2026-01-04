import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/privacy-policy') {
    return NextResponse.next()
  }

  return NextResponse.redirect(
    new URL('/privacy-policy', request.url)
  )
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
