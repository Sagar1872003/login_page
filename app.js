const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB (You need to install and configure mongoose)
mongoose.connect("mongodb://localhost:27017/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a MongoDB schema and model for users
const User = mongoose.model("User", {
    username: String,
    password: String,
});

// Handle login POST request
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
