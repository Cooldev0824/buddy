const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require("axios");
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

logger.info('This is a log message');
// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Middleware to parse JSON bodies

app.post("/", (req, res) => {
    const { messageText } = req.body; // Adjusted to use req.body directly
    console.log(messageText)
    axios.post(
        "https://api.nomi.ai/v1/nomis/75bdd368-eef0-47f4-a6a3-dcc8a736ae93/chat",
        {
            messageText: messageText,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "46cdebc8-c044-4adf-b651-f6e90fd2f5ed",
            },
        }
    )
    .then((response) => {
        console.log(response.data.replyMessage.text);
        res.send(response.data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
