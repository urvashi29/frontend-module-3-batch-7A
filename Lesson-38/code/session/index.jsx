import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    password: "11111111111111111111111111111111",
    cookieName: "ironsession/cookie",
    cookieOptions: {
      secure: false,
    },
  });
}
