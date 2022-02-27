import { createCookieSessionStorage } from "remix";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      //firebase token
      name: "fb:token",

      expires: new Date(Date.now() + 600),
      httpOnly: true,
      maxAge: 600,
      path: "/",
      sameSite: "lax",
      secrets: ["tacos"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
