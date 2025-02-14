// import getConn from "../../../common/queCommon";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

//   const { email, password } = req.body;
//   const collection = await getConn();
//   const user = await collection.findOne({ email });

//   if (!user || !(await bcrypt.compare(password, user.password))) return res.status(400).json({ error: "Invalid credentials" });

//   const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
//   res.status(200).json({ message: "Login successful", token });
// }
