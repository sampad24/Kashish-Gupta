import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  try {
    const { filename } = params;
    const videoPath = path.join(process.cwd(), 'videos', filename);

    // Check if file exists
    if (!fs.existsSync(videoPath)) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const stat = fs.statSync(videoPath);
    const fileStream = fs.createReadStream(videoPath);

    return new NextResponse(fileStream, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving video:', error);
    return NextResponse.json({ error: 'Failed to serve video' }, { status: 500 });
  }
}
