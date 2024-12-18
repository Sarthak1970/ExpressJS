import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const streetname = req.body.street; // Retrieve the street name from the form
  const petname = req.body.pet;       // Retrieve the pet name from the form
  
  console.log("Street Name:", streetname);
  console.log("Pet Name:", petname);

  // Respond with the generated band name
  res.send(`
    <h1>Your Band Name is:</h1>
    <p>${streetname} ${petname}</p>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
