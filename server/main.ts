import { Application, Router, Status } from "oak";
import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
import { createServer } from "vite";

const port = 8000;
const PUBLIC_ROOT = `${Deno.cwd()}/server/view`

const app = new Application();
const router = new Router();

// -- Proxy to Vite dev server if in dev
if (Deno.env.get("DEV")) {
}

// error handler
app.use(async (_ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
  }
});

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// --- Routes

// DAV
router.get("/dav/:subpath*", ctx => {
  ctx.response.body = `Tried accessing DAV resource /${ctx.params.subpath ? ctx.params.subpath : ""}`
})

router.get("/:path*", (ctx, next) => {
  ctx.state = {
    yee: "Haw"
  }
	ctx.response.body = `Accessing view /${ctx.params.path ? ctx.params.path : ""}`
});

router.get("/error", (_ctx) => {
  console.error("An error has been thrown");
});

app.use(router.routes());
app.use(router.allowedMethods());

// --- End Routes

// Serve static content
app.use(async (ctx, next) => {
  try {
    await ctx.send({ root: PUBLIC_ROOT });
  } catch {
    next();
  }
});

// 404
app.use((ctx) => {
  ctx.response.status = Status.NotFound;
  ctx.response.body = `"${ctx.request.url}" not found`;
});

// Info
app.addEventListener(
  "listen",
  ({ port }) => console.log(`Listening on port: ${port}`),
);

await app.listen({ port: port });
