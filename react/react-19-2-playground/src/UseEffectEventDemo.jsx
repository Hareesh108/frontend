import React, { useEffect, useState } from 'react';
import { useEffectEvent } from 'react'; // new in 19.2

function fakeConnection(roomId, cb) {
  // simulated event emitter
  let t = setTimeout(() => cb('connected'), 1000);
  return { disconnect: () => clearTimeout(t) };
}

export default function UseEffectEventDemo() {
  const [roomId, setRoomId] = useState(1);
  const [theme, setTheme] = useState('light');
  const [msg, setMsg] = useState('');

  const onConnected = useEffectEvent(() => {
    // This function always "sees" latest props/state even when used inside an effect event.
    setMsg(`Connected! theme=${theme}`);
  });

  useEffect(() => {
    const conn = fakeConnection(roomId, (ev) => {
      if (ev === 'connected') onConnected();
    });
    return () => conn.disconnect();
  }, [roomId]); // note: onConnected is NOT included in deps (Effect Events aren't dependencies)

  return (
    <div>
      <div>Room: {roomId}</div>
      <div>Theme: {theme}</div>
      <button onClick={() => setRoomId(r => r + 1)}>Change room</button>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Toggle theme</button>
      <div>{msg}</div>
    </div>
  );
}
