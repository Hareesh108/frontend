import React from "react";
import ActivityDemo from "./ActivityDemo";
import UseEffectEventDemo from "./UseEffectEventDemo";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>React 19.2 Playground</h1>
      <h1>This are the examples of the react 19.2 version update</h1>

      <section>
        <h2>&lt;Activity /&gt; demo</h2>
        <ActivityDemo />
      </section>

      <section>
        <h2>useEffectEvent demo</h2>
        <UseEffectEventDemo />
      </section>

      <section>
        <h2>Server Components / cacheSignal demo</h2>
        <p>Open <code>/prerender</code> and <code>/resume</code> from Node server.</p>
      </section>
    </div>
  );
}
