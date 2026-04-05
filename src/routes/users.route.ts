import { Hono } from "hono"

const userRouter = new Hono()

userRouter.get("/", (c) => c.json("Returns all the users."))
userRouter.get("/:username", (c) =>
  c.json({
    message: "Returns details about the user.",
    slug: c.req.param("username"),
  })
)

export default userRouter
