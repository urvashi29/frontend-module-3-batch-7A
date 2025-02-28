import { withSession } from "@/session";

export default withSession(async (req, res) => {
  req.session.destroy();
  res.json({ loggedIn: false });
});
