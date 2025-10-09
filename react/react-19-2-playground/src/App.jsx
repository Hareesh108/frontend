import React, { Suspense } from 'react';
import ActivityDemo from './ActivityDemo';
import UseEffectEventDemo from './UseEffectEventDemo';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>React 19.2 Playground</h1>
      <section>
        <h2>&lt;Activity /&gt; demo</h2>
        <ActivityDemo />
      </section>
      <section>
        <h2>useEffectEvent demo</h2>
        <UseEffectEventDemo />
      </section>

      <section>
        <h2>Server Component / cacheSignal demo</h2>
        <p>See server RSC example when visiting server endpoints.</p>
      </section>
    </div>
  );
}
