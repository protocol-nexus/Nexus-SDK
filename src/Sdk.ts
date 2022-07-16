export interface SdkEnvironmentConfig {
  restUrl: string;
  rpcUrl: string;
  chainId: string;
  explorerUrl: string;
}

const SdkDefaultEnvironment = {
  restUrl: "https://rest-test.thenexus.org",
  rpcUrl: "https://rpc-test.thenexus.org",
  chainId: "test-chain-1",
  explorerUrl: "https://explorer-test.thenexus.org",
};

export default class Sdk {
  public static environment = { ...SdkDefaultEnvironment };

  public static init(sdkEnv: SdkEnvironmentConfig): void {
    Sdk.environment = { ...Sdk.environment, ...sdkEnv };
  }

  public static reset(): void {
    Sdk.environment = { ...SdkDefaultEnvironment };
  }
}
