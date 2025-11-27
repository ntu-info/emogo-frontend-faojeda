#!/usr/bin/env node
// scripts/export-server.js
// Small HTTP server that accepts POST /export/core-memories and writes to data/core_memories.json
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.EXPORT_PORT ? Number(process.env.EXPORT_PORT) : 3333;
const DATA_DIR = path.resolve(__dirname, '..', 'data');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function writeJsonFile(filename, json) {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
  return filePath;
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(404);
    res.end();
    return;
  }

  if (req.url === '/export/core-memories') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const json = JSON.parse(body || '[]');
        const written = writeJsonFile('core_memories.json', json);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, path: written }));
        console.log(`[export-server] Wrote core_memories.json (${Array.isArray(json) ? json.length : 'obj'})`);
      } catch (err) {
        console.error('[export-server] Error writing file', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: String(err) }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`[export-server] Listening on http://localhost:${PORT}/`);
  console.log('[export-server] POST JSON to /export/core-memories');
});
