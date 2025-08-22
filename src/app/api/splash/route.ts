import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET() {
  try {
    const svg = `
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#bg)" opacity="0.2"/>
        <g transform="translate(100,100)">
          <animateTransform attributeName="transform" type="rotate" 
                           values="0 0 0;360 0 0" dur="3s" repeatCount="indefinite"/>
          <path d="M-30,-45 Q-30,-50 -25,-50 L15,-50 Q20,-50 20,-45 L20,20 Q20,30 10,40 Q0,50 -10,40 Q-20,30 -20,20 Q-20,10 -10,0 Q0,-10 10,0 L10,-35 L-30,-30 Z" 
                fill="white" opacity="0.9"/>
          <circle cx="10" cy="20" r="10" fill="white" opacity="0.9"/>
          <circle cx="-20" cy="-10" r="8" fill="white" opacity="0.9"/>
        </g>
      </svg>
    `;

    const pngBuffer = await sharp(Buffer.from(svg))
      .png()
      .resize(200, 200)
      .toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating splash', { status: 500 });
  }
}
