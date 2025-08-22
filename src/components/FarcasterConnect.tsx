'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Music } from 'lucide-react';
import { useAccount, useConnect, useSwitchChain } from 'wagmi';
import { config } from './Web3Provider';
import { sdk } from '@farcaster/miniapp-sdk';
import type { Context } from '@farcaster/miniapp-sdk';
import { base } from 'wagmi/chains';

export function FarcasterConnect() {
  const { address, status } = useAccount();
  const { connect } = useConnect();
  const { switchChain } = useSwitchChain();
  const [context, setContext] = useState<Context.MiniAppContext | null>(null);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const context = await sdk.context;
        console.log(context, "farcaster context");
        setContext(context);
      } catch (error) {
        console.error('Failed to get Farcaster context:', error);
      }
    };
    fetchContext();
  }, []);

  useEffect(() => {
    if (status === "connected") {
      switchChain({ chainId: base.id });
    }
  }, [switchChain, address, status]);

  return (
    <div className="farcaster-connect">
      {status === "connected" && address ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
        >
          {context?.user.pfpUrl ? (
            <img 
              src={context.user.pfpUrl} 
              alt="avatar" 
              className="w-6 h-6 rounded-full border border-white/30" 
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
              <Music className="w-3 h-3 text-white" />
            </div>
          )}
          <span className="text-white font-medium text-sm">
            {context?.user.username || truncateAddress(address)}
          </span>
        </motion.div>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => connect({ connector: config.connectors[0] })}
          className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Wallet className="w-5 h-5" />
          <span>Connect with Farcaster</span>
        </motion.button>
      )}
    </div>
  );
}

function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
