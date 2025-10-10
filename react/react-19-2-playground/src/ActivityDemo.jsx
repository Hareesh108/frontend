import React, { useState } from 'react';
import { Activity } from 'react'; // new API in 19.2

function HeavyHiddenComponent() {
  // imagine expensive work, image loads, etc
  return <div>Hidden heavy content pre-rendered (simulated)</div>;
}

export default function ActivityDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(v => !v)}>
        toggle visible (currently {String(visible)})
      </button>

      {/* Activity supports 'visible' and 'hidden' modes.
          In hidden mode effects are unmounted and updates deferred. */}
      <Activity mode={visible ? 'visible' : 'hidden'}>
        <HeavyHiddenComponent />
      </Activity>
    </div>
  );
}
