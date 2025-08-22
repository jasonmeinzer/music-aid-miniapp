'use client';

import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@/components/Web3Provider';
import { FarcasterConnect } from '@/components/FarcasterConnect';
import { sdk } from '@farcaster/miniapp-sdk';
import { motion } from 'framer-motion';
import { Music, Target, Heart } from 'lucide-react';

const AppContent = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (!isAppReady) {
      const markAppReady = async () => {
        try {
          await sdk.actions.ready();
          setIsAppReady(true);
          console.log('App marked as ready!');
        } catch (error) {
          console.error('Failed to mark app as ready:', error);
          setIsAppReady(true);
        }
      };

      const timer = setTimeout(() => {
        markAppReady();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isAppReady]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Music Aid</h1>
            <p className="text-purple-200 text-sm">Disaster Relief Crowdfund</p>
          </div>
        </div>
        <FarcasterConnect />
      </header>
      
      <main className="flex-1 px-6 pb-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full">
                <Target className="w-8 h-8 text-white" />
              </div>
              <Heart className="w-6 h-6 text-red-400" />
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Support Music Disaster Relief
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Help fund music efforts for disaster relief. Your USDC donations on Base 
              blockchain support musicians and communities affected by disasters.
            </p>
            
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-300">Step 1</div>
                  <div className="text-sm text-white/70">Approve USDC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">Step 2</div>
                  <div className="text-sm text-white/70">Donate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">Step 3</div>
                  <div className="text-sm text-white/70">Claim Refund*</div>
                </div>
              </div>
              <p className="text-xs text-white/50 mt-4">
                *Only if goal isn't reached by deadline
              </p>
            </div>

            <div className="text-center">
              <p className="text-white/60 text-sm">
                Connect your Farcaster wallet above to start donating
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-black/20 backdrop-blur-sm border-t border-white/10 p-3 text-center">
        <a 
          href="https://herd.eco/trails/0198cb37-deb0-75fb-9d7a-838cc5254637/overlook" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white text-sm transition-colors"
        >
          Powered by Herd
        </a>
      </footer>
    </div>
  );
};

export default function Home() {
  return (
    <Web3Provider>
      <AppContent />
    </Web3Provider>
  );
}
