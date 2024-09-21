// pages/api/createTimeTable.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, slots, teamId, userId, data } = req.body;

    try {
      const newTimeTable = await prisma.timeTable.create({
        data: {
          name,
          slots,
          teamId,
          userId,
          data,
        },
      });

      return res.status(200).json({ success: true, data: newTimeTable });
    } catch (error) {
      console.error('Error creating timetable:', error);
      return res.status(500).json({ success: false, error: (error as Error).message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
