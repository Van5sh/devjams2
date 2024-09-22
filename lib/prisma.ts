// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Declare a global variable to persist the PrismaClient across hot reloads in development
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize PrismaClient and cache it globally in development to prevent
// multiple instances from being created during hot reloading.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
