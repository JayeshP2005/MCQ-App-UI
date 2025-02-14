// import getConn from "../../../common/queCommon";
// import bcrypt from "bcryptjs";

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

//   const { username, email, password } = req.body;
//   if (!username || !email || !password) return res.status(400).json({ error: "All fields are required" });

//   const collection = await getConn();
//   if (await collection.findOne({ email })) return res.status(400).json({ error: "User already exists" });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = await collection.insertOne({ username, email, password: hashedPassword });

//   res.status(201).json({ message: "User registered successfully", userId: newUser.insertedId });
// }
