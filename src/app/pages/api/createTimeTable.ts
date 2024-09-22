import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a function to handle the database creation using function parameters
async function createTimetable(
  name: string,
  slots: string,
  teamId: string,
  userId: string,
  data: string
): Promise<any> {
  return await prisma.timeTable.create({
    data: {
      name,
      slots,
      teamId,
      userId,
      data,
    },
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, slots, teamId, userId, data } = req.body;

    if (!name || !slots || !teamId || !userId) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
      // Call the Prisma function directly with the required parameters
      const newTimeTable = await createTimetable(name, slots, teamId, userId, data);
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
