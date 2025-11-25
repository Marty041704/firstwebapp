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
            background: linear-gradient(145deg, #eae2d6, #d1c4b2);
            font-family: "Poppins", sans-serif;
            color: #2c2b28;
          }

          .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            background: #ffffff;
            padding: 50px 60px;
            border-radius: 20px;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
            border: 1px solid rgba(0,0,0,0.08);
            text-align: center;
            max-width: 400px;
          }

          img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #b8a896;
          }

          h1 {
            font-size: 2.2rem; /* Slightly smaller than before */
            font-weight: 700;
            font-family: "Playfair Display", serif;
            color: #3b2f2f;
            white-space: nowrap; /* Keeps full name in one line */
          }

          h2 {
            font-size: 1.2rem;
            font-weight: 400;
            color: #5e4c4c;
          }

          .quote {
            font-size: 1.05rem;
            font-style: italic;
            color: #6b5a5a;
          }

          @media (max-width: 480px) {
            .card {
              padding: 35px 25px;
            }
            img {
              width: 140px;
              height: 140px;
            }
            h1 {
              font-size: 1.8rem; /* Slightly smaller on mobile */
            }
            h2 {
              font-size: 1rem;
            }
          }
        </style>
      </head>

      <body>
        <div class="card">
          <img src="/FormalAttire.jpg" alt="Profile Picture">
          <h1>Rod Marty C. Mendoza</h1>
          <h2>BSIT NT - 4101</h2>
          <div class="quote">"Everything has been the result of my choices, not by fate"</div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🌐 Express server running on port ${PORT}`);
});
