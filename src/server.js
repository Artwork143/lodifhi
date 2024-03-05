// server.js
import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Sample user data (replace with a database in a real application)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password is correct (basic example)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
