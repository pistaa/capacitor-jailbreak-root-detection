export interface CapacitorJailbreakRootDetectionPlugin {
  isJailbrokenOrRooted(): Promise<JailbreakRootResult>;
  isFridaRunning(): Promise<JailbreakRootResult>;
  isSimulator(): Promise<JailbreakRootResult>;
  isDebuggedMode(): Promise<JailbreakRootResult>;
  exitApp(): void;
}

export interface JailbreakRootResult {
  result: boolean;
}
