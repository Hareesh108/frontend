import React, { useState } from "react";
import { Activity } from "react";

function HeavyHiddenComponent() {
  return <div>Hidden heavy content pre-rendered</div>;
}

export default function ActivityDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(v => !v)}>
        toggle visible (currently {String(visible)})
      </button>

      <Activity mode={visible ? "visible" : "hidden"}>
        <HeavyHiddenComponent />
      </Activity>
    </div>
  );
}
