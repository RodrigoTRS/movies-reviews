"use server"

import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from "@/lib/prisma";


interface GetUserByEmailRequest {
    email: string
}

export async function getUserByEmail({ email }: GetUserByEmailRequest) {
    noStore()
    try {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
        return user
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get user.');
    }
}
