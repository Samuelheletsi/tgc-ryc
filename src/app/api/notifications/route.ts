// app/api/notifications/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/data/site.json');

// GET all notifications
export async function GET() {
  const file = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file);
  return NextResponse.json(data.notifications || []);
}

// POST new notification
export async function POST(req: Request) {
  const body = await req.json();
  const file = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file);

  const newNotification = {
    id: Date.now(),
    title: body.title,
    description: body.description,
    date: new Date().toISOString(),
    read: false,
  };

  data.notifications.unshift(newNotification);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json(newNotification, { status: 201 });
}
