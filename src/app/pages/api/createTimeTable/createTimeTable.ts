// api/timetable.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTimeTable = async (
  name: string,
  slots: object,
  teamId: string,
  userId: string,
  data: object
): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const timetable = await prisma.timeTable.create({
      data: {
        name,
        slots,
        teamId,
        userId,
        data,
      },
    });

    return {
      success: true,
      data: timetable,
    };
  } catch (error) {
    console.error('Error creating timetable:', error);
    return {
      success: false,
      error: (error as Error).message,
    };
  } finally {
    await prisma.$disconnect();
  }
};
