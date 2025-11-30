import React from "react";
import ServerCounter from "./ServerCounter.server.jsx";

export default function RSCEntry() {
  return (
    <div>
      <h2>Server Component Demo (cacheSignal)</h2>
      <ServerCounter url="https://example.com/api/data" />
    </div>
  );
}
