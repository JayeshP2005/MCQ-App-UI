// import getConn from "../../../common/queCommon";
// import { verify } from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   try {
//     verify(token, process.env.JWT_SECRET);
//     const { data } = req.body;
//     const collection = await getConn();
//     const result = await collection.insertOne(data);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
