# WebSocket Keep-Alive: Ping/Pong Explained

WebSockets, unlike plain TCP, have their **own keep-alive mechanism**:  
the **PING** and **PONG** control frames.

---

## 🔹 Why Not Just Rely on TCP Keep-Alive?

- **TCP keep-alive** only ensures the health of the underlying TCP connection.  
- But WebSocket connections can traverse **intermediaries** like:
  - Proxies  
  - Load balancers  
  - Gateways  

These intermediaries may terminate idle TCP sessions.  
So, relying solely on TCP keep-alive isn't always enough.

---

## 🔹 How WebSocket Keep-Alive Works

- **PING frame** → Sent by one peer to check if the other peer is still responsive.  
- **PONG frame** → Automatically sent back in response to a `PING`.  

✨ Both `PING` and `PONG` frames can carry **optional application data**, although they are usually kept small.

---

## 🔹 Benefits of WebSocket Ping/Pong

1. ✅ Keeps the WebSocket connection active.  
2. ✅ Detects broken or unresponsive peers.  
3. ✅ Refreshes idle intermediary TCP connections (important when crossing proxies).  

---

## 🔹 Debugging with Wireshark

If the WebSocket traffic is over **TLS (wss://)**, you can still inspect `PING` and `PONG` frames using Wireshark by decrypting the traffic:

1. Set the `SSLKEYLOGFILE` environment variable in Chrome or Firefox.  
2. Point Wireshark to this key log file.  
3. Wireshark can then decrypt TLS and show WebSocket frames, including `PING` and `PONG`.

---

## 🔹 Example Flow

```txt
Client → Server : PING (heartbeat)
Server → Client : PONG (response)
