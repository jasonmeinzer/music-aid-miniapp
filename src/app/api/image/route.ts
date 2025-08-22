import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET() {
  try {
    const svg = `
      <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1E1B4B;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#7C3AED;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#bg)"/>
        <g transform="translate(300,200)">
          <path d="M-60,-90 Q-60,-100 -50,-100 L30,-100 Q40,-100 40,-90 L40,40 Q40,60 20,80 Q0,100 -20,80 Q-40,60 -40,40 Q-40,20 -20,0 Q0,-20 20,0 L20,-70 L-60,-60 Z" 
                fill="white" opacity="0.9"/>
          <circle cx="20" cy="40" r="20" fill="white" opacity="0.9"/>
          <circle cx="-40" cy="-20" r="15" fill="white" opacity="0.9"/>
        </g>
        <text x="300" y="280" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="32" font-weight="bold">
          Music Aid
        </text>
        <text x="300" y="310" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Inter, sans-serif" font-size="16">
          Support Disaster Relief Through Music
        </text>
      </svg>
    `;

    const pngBuffer = await sharp(Buffer.from(svg))
      .png()
      .resize(600, 400)
      .toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating image', { status: 500 });
  }
}
