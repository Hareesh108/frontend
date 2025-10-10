import React from "react";
import { cache, cacheSignal } from "react";

const dedupedFetch = cache(async (url, { signal } = {}) => {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => resolve({ ts: Date.now(), url }), 2000);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new Error("aborted"));
    });
  });
});

export default async function ServerCounter({ url }) {
  const r = await dedupedFetch(url, { signal: cacheSignal() });
  return <div>Fetched (server-side) at {r.ts}</div>;
}
