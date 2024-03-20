"use server"

import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from "@/lib/prisma";


interface GetUserByIDRequest {
    id: string
}

export async function getUserByID({ id }: GetUserByIDRequest) {
    noStore()
    try {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })
        return user
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get user.');
    }
}
