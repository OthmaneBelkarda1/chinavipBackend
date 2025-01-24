const express = require("express");
const cors = require("cors"); // Import cors package

const app = express();
const mongoose = require("mongoose");
const Article = require("./models/Article.js");

// MongoDB connection
mongoose.connect("mongodb+srv://capucine:Simovip123@capucine.yswq5.mongodb.net/?retryWrites=true&w=majority&appName=capucine")
.then(() => {
    console.log("connected successfully");
}).catch((error) => {
    console.log("error with connecting to the database", error);
});

// Use CORS middleware globally
app.use(cors({
    origin: '*', // Allow only this origin (adjust if necessary)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.listen(3000, () => {
    console.log("I'm listening on port 3000");
});

app.use(express.json());

app.post("/articles", async (req, res) => {
    const newArticle = new Article();
    const {Name,Note, Passport, Age, Niveau, filiere, Numero } = req.body;

    newArticle.Name = Name;
    newArticle.Note=Note;
    newArticle.Passport = Passport;
    newArticle.Age = Age;
    newArticle.Niveau = Niveau;
    newArticle.filiere = filiere;
    newArticle.Numero = Numero;

    await newArticle.save();
    res.json(newArticle);
});

app.get("/article", async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
        console.log("The articles are:", articles);
    } catch (error) {
        console.log("Error");
        return res.send("Error");
    }
});

app.delete("/articles/:articleId", async (req, res) => {
    const id = req.params.articleId;
    try {
        const article = await Article.findByIdAndDelete(id);
        res.json(article);
    } catch (error) {
        console.log("Error");
        return res.send("Error");
    }
});
