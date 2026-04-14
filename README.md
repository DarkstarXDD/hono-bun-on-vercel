## Zero Config

- You don’t need any adapters. If you see adapters in some guide, it’s outdated. Vercel supports Hono on both Node and Bun runtimes without any extra tooling. https://vercel.com/docs/frameworks/backend/hono

## Picking the runtime

- The default runtime on Vercel serverless functions is Node. So if you want the Node runtime, you don’t have to do anything extra.
- If you want Bun runtime, you have to opt into it. You do it by defining a `bunVersion` in the `vercel.json` file. https://vercel.com/docs/functions/runtimes/bun#configuring-the-runtime
  ```
  {
   "bunVersion: "1.x"
  }
  ```

## Path alias issue

- One big issue I faced was, the serverless functions kept crashing at runtime when I had path alias in my imports. The build passes without any issues, but at runtime it just crashes.
  ```tsx
  import postsRouter from "@/routes/posts.route"
  ```
- One solution was to replace the path alias in the imports with relative paths. But path alias is a very convenient thing, so didn’t really want to go straight to that solution.
- Then I came across this: https://vercel.com/changelog/experimental-build-mode-hono-express
- Setting that environment variable seems to fix the issue, and now the path alias works in both Node and Bun without any issues.
