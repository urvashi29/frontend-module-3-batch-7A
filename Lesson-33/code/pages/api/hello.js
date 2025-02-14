// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.revalidate("/"); //index.js
  res.status(200).json({ mesasge: "Revalidate" });
}
