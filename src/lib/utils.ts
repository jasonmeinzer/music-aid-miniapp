import { TRAIL_CONFIG } from './constants';

export const formatUSDC = (amount: string | number): string => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return (num / 1_000_000).toFixed(2);
};

export const parseUSDCInput = (amount: string): string => {
  const num = parseFloat(amount || '0');
  return (num * 1_000_000).toString();
};

export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export const isExpired = (endTimestamp: string): boolean => {
  return Date.now() > parseInt(endTimestamp) * 1000;
};

export const getApiHeaders = () => ({
  'Content-Type': 'application/json',
  'Herd-Trail-App-Id': TRAIL_CONFIG.TRAIL_APP_ID,
});

export const truncateAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getProgressPercentage = (raised: string, goal: string): number => {
  const raisedNum = parseFloat(formatUSDC(raised));
  const goalNum = parseFloat(formatUSDC(goal));
  return Math.min((raisedNum / goalNum) * 100, 100);
};
