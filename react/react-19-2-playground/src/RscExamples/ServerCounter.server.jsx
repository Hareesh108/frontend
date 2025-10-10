import React from 'react';
import { cache, cacheSignal } from 'react';

const dedupedFetch = cache(async (url, { signal } = {}) => {
  // simulate fetch that can be aborted with cacheSignal
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => resolve({ ts: Date.now(), url }), 2000);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(new Error('aborted'));
    });
  });
});

export default async function ServerCounter({ url }) {
  // This will pass cacheSignal() that aborts when the cache lifetime ends.
  const r = await dedupedFetch(url, { signal: cacheSignal() });
  return (
    <div>
      <div>Fetched (server-side) at {r.ts}</div>
    </div>
  );
}
