import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getUserSchema = z.object({
  email: z.string()
})

export async function POST(req: NextRequest) {
  const { email } = getUserSchema.parse(await req.json())
  try {

    const user = await prisma.user.findFirst({ where: { email }})

    if (!user) {
      throw new Error("User doesn't exists.")
    }

    return NextResponse.json(user , { status: 200 });
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Internal server error."} , { status: 500 });
  }
}




