import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import App from "../src/App.jsx";
import {
  prerenderToNodeStream,
  resumeToPipeableStream
} from "react-dom/server";

const app = express();
app.use(express.static(path.resolve("dist")));

app.get("/prerender", async (req, res) => {
  const controller = new AbortController();
  const { stream, postponed } = await prerenderToNodeStream(<App />, {
    signal: controller.signal
  });
  fs.writeFileSync("./.postponed.json", JSON.stringify(postponed));
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  stream.pipe(res);
});

app.get("/resume", async (req, res) => {
  const postponed = JSON.parse(fs.readFileSync("./.postponed.json", "utf8"));
  const resumeStream = await resumeToPipeableStream(<App />, postponed);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  resumeStream.pipe(res);
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
