import { Hono } from "hono"

const postsRouter = new Hono()

postsRouter.get("/", (c) => c.json("Returns all the items"))
postsRouter.get("/:slug", (c) =>
  c.json({
    message: "Returns details about the item.",
    slug: c.req.param("slug"),
  })
)

export default postsRouter
