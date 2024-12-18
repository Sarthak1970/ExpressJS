import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the login page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Middleware for password checking, applied only to /check
function passwordCheck(req, res, next) {
  const pass = req.body["password"];
  if (pass === "ILoveProgramming") {
    req.userIsAuthorised = true; // Store authorization status in the request object
  } else {
    req.userIsAuthorised = false;
  }
  next();
}

// Apply passwordCheck middleware only to the POST /check route
app.post("/check", passwordCheck, (req, res) => {
  if (req.userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
