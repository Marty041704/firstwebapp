const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Rod Marty C. Mendoza</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5efe7;
            font-family: "Poppins", sans-serif;
            color: #2d2b2b;
          }

          .card {
            display: flex;
            align-items: center;
            gap: 25px;
            background: white;
            padding: 35px 45px;
            border-radius: 18px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.10);
            border: 1px solid rgba(0,0,0,0.05);
          }

          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #c2b2b2;
          }

          h1 {
            font-size: 2rem;
            font-weight: 700;
            font-family: "Playfair Display", serif;
            margin-bottom: 6px;
          }

          h2 {
            font-size: 1.1rem;
            font-weight: 400;
            color: #6b5555;
            margin-bottom: 12px;
          }

          .quote {
            font-size: 1.05rem;
            font-style: italic;
            color: #7a6a6a;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <img src="/FormalAttire.jpg" alt="Profile Picture">
          <div>
            <h1>Rod Marty C. Mendoza</h1>
            <h2>BSIT NT - 4101</h2>
            <div class="quote">"Everything has been the result of my choices, not by fate"</div>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🌐 Express server running on port ${PORT}`);
});
