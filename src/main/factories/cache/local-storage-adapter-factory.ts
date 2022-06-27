import { LocalStorageAdapter } from "@infra/local-storage-adapter";

export const makeLocalStorageAdapter = (): LocalStorageAdapter => {
  return new LocalStorageAdapter();
};
