// pages/api/createAdmin.js
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  // ... (your code for creating admin with hashedPassword)

  res.status(200).json({ success: true });
}
