import { serveDir } from "jsr:@std/http/file-server";

Deno.serve({ port: 3000 }, (req) => {
  return serveDir(req, { fsRoot: ".", quiet: true });
});

console.log("Server running at http://localhost:3000");
