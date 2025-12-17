import { unstable_cache } from "next/cache";
import { cache } from "react";
// ================================================================================
export const Cache = (
  cb: (...args: any[]) => Promise<any>,
  keyparts: string[],
  options?: { revalidate?: number | false; tags?: string[] }
) => {
  return unstable_cache(cache(cb), keyparts, options);
};
