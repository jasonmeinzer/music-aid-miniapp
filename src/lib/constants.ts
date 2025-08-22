// Anyone can reference this document again for any trail details and debugging help: 
// https://trails-api.herd.eco/v1/trails/0198cb37-deb0-75fb-9d7a-838cc5254637/versions/0198cb37-deb8-7836-b6fc-f70ca72b39db/guidebook.txt?promptObject=farcaster_miniapp&trailAppId=0198cb43-44e5-7beb-a072-657ad165d79a

export const TRAIL_CONFIG = {
  TRAIL_ID: "0198cb37-deb0-75fb-9d7a-838cc5254637",
  VERSION_ID: "0198cb37-deb8-7836-b6fc-f70ca72b39db",
  TRAIL_APP_ID: "0198cb43-44e5-7beb-a072-657ad165d79a",
  CROWDFUND_ID: "3315",
  BASE_API_URL: "https://trails-api.herd.eco/v1",
} as const;

export const CONTRACTS = {
  USDC: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  CROWDFUND: "0x016df4c52fb5c0e1cb3432ebd6071a90b1f6dcd9",
} as const;

export const STEP_NODES = {
  STEP_1_APPROVE: "0198cb37-debe-7283-a718-cd72690dc1ce",
  STEP_2_DONATE: "0198cb37-debd-793b-b458-02447de0c4a8", 
  STEP_3_REFUND: "0198cb37-dec0-7030-a48c-b3b247eeac13",
} as const;

export const READ_NO
