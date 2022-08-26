export interface StorageProps {
  get: () => any;
  set: (val: any) => void;
  destroy: () => void;
}
