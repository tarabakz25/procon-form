import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@/app/generated/prisma"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const { name, participation } = await request.json()

    const submission = await prisma.submission.create({
        data: {
            name,
            participation
        }
    })

    return NextResponse.json(submission)
}