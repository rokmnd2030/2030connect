import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from 'path-to-regexp';

export { auth as middleware } from '@/auth';