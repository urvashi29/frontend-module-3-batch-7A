import { withSession } from "@/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    res.json({
      loggedIn: true,
      ...user,
    });
  } else {
    res.json({ loggedIn: false });
  }
});
