const express = require("express");
const cors = require("cors")
 

const app = express();
app.use(cors({origin: "https://agency-website-react-js.vercel.app"}));
app.use(express.json());

app.post("/chatbot", (req, res) => {
  const { message } = req.body;
  
  let reply = "I'm just a simple bot. Ask me something else!";
  if (message.toLowerCase().includes("hello")) reply = "Hello! How can I help you?";
  if (message.toLowerCase().includes("bye")) reply = "Goodbye! Have a great day!";
  if (message.toLowerCase().includes("location")) reply = "2 street, los angles, USA";
  if(message.toLowerCase().includes("service")) reply = "Digital marketing, web development, E-commerce, shopify etc."
  if(message.toLowerCase().includes('create you')) reply= "Shuvo Sarkar from bangladesh"
  res.json({ reply });
});

app.listen(5000, () => console.log("Chatbot backend running on port 5000"));
