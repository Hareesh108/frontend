# SSE Keep-Alive: Comments & Heartbeats Explained

**Server-Sent Events (SSE)** run over plain HTTP and keep a **long-lived connection** open from **server → client**.
Since intermediaries (proxies, load balancers) may close idle connections, SSE needs its own **keep-alive strategy**.

---

## 🔹 Why Not Just Rely on TCP Keep-Alive?

* **TCP keep-alive** ensures the transport is alive, but:

  * HTTP intermediaries often **terminate idle connections**.
  * Without traffic, SSE connections may silently die.

So, the application must send **periodic messages** to keep the stream alive.

---

## 🔹 How SSE Keep-Alive Works

* SSE uses **text-based events** sent over `text/event-stream`.
* To keep the connection alive, the server periodically sends:

  1. **Comment lines** → Start with `:` (ignored by client).

     ```txt
     : keep-alive
     ```
  2. **Heartbeat events** → Regular `event:`/`data:` messages.

     ```txt
     event: ping
     data: 💓
     ```

The browser’s **`EventSource`** API will treat these as normal SSE events (or ignore comments).

---

## 🔹 Benefits of SSE Keep-Alive

1. ✅ Prevents proxies/load balancers from closing idle streams.
2. ✅ Allows the server to detect client disconnects (when a write fails).
3. ✅ Ensures the client receives a continuous stream (no silent drop).

---

## 🔹 Debugging with curl or Browser DevTools

* SSE is just **plain text over HTTP**, so you can debug easily:

```bash
curl -N http://localhost:3000/events
```

You’ll see events (and heartbeats) in real time.

In browsers, open **DevTools → Network → EventStream** to inspect messages.

---

## 🔹 Example Flow

```txt
Server → Client : data: { "msg": "Hello" }

Server → Client : : keep-alive      (comment, ignored by client)

Server → Client : event: ping
                  data: heartbeat   (custom event)

Client (EventSource) → automatically reconnects if connection drops
```
