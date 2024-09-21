// pages/api/team.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;

    try {
      // Create a new team
      const newTeam = await prisma.team.create({
        data: {
          name,
        },
      });

      return res.status(201).json({ success: true, data: newTeam });
    } catch (error) {
      console.error('Error creating team:', error);
      return res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
