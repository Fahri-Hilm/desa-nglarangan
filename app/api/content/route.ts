import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (key) {
    const content = await prisma.content.findUnique({ where: { key } });
    return NextResponse.json(content);
  }

  const contents = await prisma.content.findMany({
    orderBy: { updatedAt: 'desc' },
  });
  return NextResponse.json(contents);
}

export async function POST(request: Request) {
  const body = await request.json();
  const content = await prisma.content.create({ data: body });
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, ...data } = body;
  const content = await prisma.content.update({
    where: { id },
    data,
  });
  return NextResponse.json(content);
}
