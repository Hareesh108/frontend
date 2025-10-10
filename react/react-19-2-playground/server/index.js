import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import App from '../src/App.jsx';
import {
  prerenderToNodeStream,
  resumeToPipeableStream,
  // renderToPipeableStream // also available
} from 'react-dom/server';

const app = express();
app.use(express.static(path.resolve(process.cwd(), 'dist')));

// Endpoint: generate prelude and postponed state and save it
app.get('/prerender', async (req, res) => {
  // NOTE: this is illustrative. In real usage you will store "postponed" state to CDN/DB.
  const controller = new AbortController();
  const { stream: preludeStream, postponed } = await prerenderToNodeStream(<App />, { signal: controller.signal });

  // pipe prelude to response header and save postponed to memory/file
  // here we will save postponed to disk for demo:
  fs.writeFileSync('./.postponed.json', JSON.stringify(postponed));
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  preludeStream.pipe(res);
});

// Endpoint: resume using saved postponed state to produce a full SSR stream
app.get('/resume', async (req, res) => {
  const postponed = JSON.parse(fs.readFileSync('./.postponed.json', 'utf8'));
  const resumeStream = await resumeToPipeableStream(<App />, postponed);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  resumeStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});
