import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createUserSchema = z.object({
  email: z.string(),
  password: z.string()
})


export async function POST(req: NextRequest) {
  const { email, password } = createUserSchema.parse(await req.json())
  try {

    const user = await prisma.user.findFirst({ where: { email }})

    if (user) {
      throw new Error("User already exists.")
    }

    await prisma.user.create({
      data: {
        email,
        password: await hashPassword(password)
      }
    })

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Internal server error."} , { status: 500 });

  }
}

async function hashPassword(password: string) {
  const hashed_password = await hash(password, 6)
  return hashed_password
}




