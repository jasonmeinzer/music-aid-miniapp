import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET() {
  try {
    const svg = `
      <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1024" height="1024" rx="128" fill="url(#bg)"/>
        <g transform="translate(512,512)">
          <path d="M-120,-180 Q-120,-200 -100,-200 L60,-200 Q80,-200 80,-180 L80,80 Q80,120 40,160 Q0,200 -40,160 Q-80,120 -80,80 Q-80,40 -40,0 Q0,-40 40,0 L40,-140 L-120,-120 Z" 
                fill="white" opacity="0.9"/>
          <circle cx="40" cy="80" r="40" fill="white" opacity="0.9"/>
          <circle cx="-80" cy="-40" r="30" fill="white" opacity="0.9"/>
        </g>
      </svg>
    `;

    const pngBuffer = await sharp(Buffer.from(svg))
      .png()
      .resize(1024, 1024)
      .toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating icon', { status: 500 });
  }
}
