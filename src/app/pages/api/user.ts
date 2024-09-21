// pages/api/user.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, googleId, teamId } = req.body;

    try {
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          googleId,
          teamId,
        },
      });

      return res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ success: false, error: (error as Error).message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
