import { StorageProps } from "../types";
import { setKey } from "./utils";

const key = setKey("token");

export function useTokenStorage(): StorageProps {
  const set = (val: string) => localStorage.setItem(key, val);
  
  const get = () => {
    const storedData = localStorage.getItem(key);
    return storedData ? storedData : null;
  };

  const destroy = () => localStorage.removeItem(key);

  return {
    set,
    get,
    destroy,
  };
}
