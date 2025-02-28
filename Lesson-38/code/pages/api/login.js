import { data } from "@/data";
import { withSession } from "@/session";

const handler = async function (req, res) {
  console.log(req);
  console.log(req.body);

  const { userName, password } = req.body;
  const user = data.find((item) => item.username === userName);

  if (user && user.password == password) {
    console.log("okay");
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "user authenicated!" });
  } else {
    res.status(403).json({ message: "user not authenticated" });
  }

  //   write logic
};

export default withSession(handler);
