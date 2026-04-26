// Minimal static file server — Node built-ins only.
// Lovable's runner invokes `npm run dev -- --port <PORT>`; we ignore extra args
// and read the port from the env or argv.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const ROOT = resolve(".");

// Pull --port N from argv if present, else fall back to env / 8080.
let port = Number(process.env.PORT) || 8080;
const argv = process.argv.slice(2);
const portFlag = argv.indexOf("--port");
if (portFlag !== -1 && argv[portFlag + 1]) port = Number(argv[portFlag + 1]);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png":  "image/png",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
};

async function send(res, file, status = 200) {
  try {
    const data = await readFile(file);
    res.writeHead(status, {
      "Content-Type": TYPES[extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
}

const server = createServer(async (req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const safe = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(ROOT, safe);
  if (!filePath.startsWith(ROOT)) return send(res, "", 404);

  try {
    const s = await stat(filePath);
    if (s.isDirectory()) filePath = join(filePath, "index.html");
  } catch {
    // Try .html extension fallback (e.g. /about -> /about.html)
    if (!extname(filePath)) {
      try { await stat(filePath + ".html"); filePath += ".html"; } catch {}
    }
  }
  await send(res, filePath);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Static server listening on http://0.0.0.0:${port}`);
});
