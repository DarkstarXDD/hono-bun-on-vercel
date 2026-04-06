import { Hono } from "hono"

import postsRouter from "@/routes/posts.route"
import userRouter from "@/routes/users.route"

const app = new Hono()

app.get("/", (c) =>
  c.json("Hello from Hono, running on Bun and deployed on Vercel.")
)

app.route("/api/users", userRouter)
app.route("/api/posts", postsRouter)

export default app
