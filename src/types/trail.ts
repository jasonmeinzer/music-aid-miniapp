export interface UserInput {
  value: string;
}

export interface EvaluationRequest {
  walletAddress: string;
  userInputs: Record<string, Record<string, UserInput>>;
  execution: { type: "latest" | "new" } | { type: "manual"; executionId: string };
}

export interface EvaluationResponse {
  finalInputValues: Record<string, string>;
  payableAmount: string;
  contractAddress: string;
  callData: string;
}

export interface ExecutionRequest {
  nodeId: string;
  transactionHash: string;
  walletAddress: string;
  execution: { type: "latest" | "new" } | { type: "manual"; executionId: string };
}

export interface FarcasterData {
  username: string;
  pfp_url: string;
  display_name: string;
  fid: string;
  bio: string;
}

export interface CrowdfundInfo {
  goal: string;
  totalRaised: string;
  endTimestamp: string;
  contentIdHash: string;
  creator: string;
  fundsClaimed: boolean;
  cancelled: boolean;
}
