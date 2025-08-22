import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface FarcasterMiniAppAction {
  type: 'launch_miniapp';
  name: string;
  url: string;
  splashImageUrl?: string;
  splashBackgroundColor?: string;
}

interface FarcasterMiniAppButton {
  title: string;
  action: FarcasterMiniAppAction;
}

interface FarcasterMiniAppEmbed {
  version: '1';
  imageUrl: string;
  button: FarcasterMiniAppButton;
}

function createMiniAppMetadata(config: FarcasterMiniAppEmbed): Metadata {
  return {
    other: {
      'fc:miniapp': JSON.stringify(config)
    }
  };
}

export const metadata: Metadata = {
  title: 'Music Aid - Disaster Relief Crowdfund',
  description: 'Support music efforts for disaster relief through USDC donations',
  ...createMiniAppMetadata({
    version: '1',
    imageUrl: 'https://your-app-url.vercel.app/api/image',
    button: {
      title: '🎵 Support Music Aid',
      action: {
        type: 'launch_miniapp',
        name: 'Music Aid',
        url: 'https://your-app-url.vercel.app',
        splashImageUrl: 'https://your-app-url.vercel.app/api/splash',
        splashBackgroundColor: '#1a1b23'
      }
    }
  })
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
