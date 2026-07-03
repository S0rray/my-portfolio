import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Activer via variable d'environnement sur le VPS (sans rebuild)
// Sur le VPS : ajouter MAINTENANCE_MODE=true dans .env.local puis pm2 restart
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true';

export function proxy(request: NextRequest) {
  if (
    MAINTENANCE_MODE &&
    !request.nextUrl.pathname.startsWith('/maintenance')
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|.*\\..*).*)'],
};
