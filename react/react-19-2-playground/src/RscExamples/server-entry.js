// server-entry.js
import React from "react";
import ServerCounter from "./ServerCounter.server.jsx";

// This file would be used by your server (or RSC build pipeline)
// to render server components separately from the client bundle.

export default function RSCEntry() {
  return (
    <div>
      <h2>Server Component Demo (cacheSignal)</h2>
      <ServerCounter url="https://example.com/api/data" />
    </div>
  );
}
