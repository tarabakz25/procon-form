import { NextResponse } from 'next/server'
import { PrismaClient } from '@/app/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const fetchedSubmissions = await prisma.submission.findMany()
    return NextResponse.json(fetchedSubmissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json({ message: 'Error fetching submissions' }, { status: 500 });
  }
} 