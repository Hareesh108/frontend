import React, { useEffect, useState } from "react";
import { useEffectEvent } from "react";

function fakeConnection(roomId, cb) {
  const t = setTimeout(() => cb("connected"), 1000);
  return { disconnect: () => clearTimeout(t) };
}

export default function UseEffectEventDemo() {
  const [roomId, setRoomId] = useState(1);
  const [theme, setTheme] = useState("light");
  const [msg, setMsg] = useState("");

  console.log("msg:", msg);

  const onConnected = useEffectEvent(() => {
    setMsg(`Connected! theme=${theme}`);
  });

  let count = 0

  useEffect(() => {
    const conn = fakeConnection(
      roomId,
      (ev) => ev === "connected" && onConnected()
    );
    console.log("count:",++count);
    
    return () => conn.disconnect();
  }, [roomId]);

  return (
    <div>
      <div>Room: {roomId}</div>
      <div>Theme: {theme}</div>
      <button onClick={() => setRoomId((r) => r + 1)}>Change room</button>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle theme
      </button>
      <div>{msg}</div>
    </div>
  );
}
