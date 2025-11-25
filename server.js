const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const html = `
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
            background: linear-gradient(135deg, #e8d8ac, #d6b3c5);
            font-family: "Poppins", sans-serif;
            color: #332b2b;
          }

          .card {
            text-align: center;
            background: white;
            padding: 45px 65px;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            border: 1px solid rgba(0,0,0,0.08);
          }

          h1 {
            margin-bottom: 6px;
            font-size: 2.3rem;
            font-weight: 700;
            font-family: "Playfair Display", serif;
            color: #4a3c3c;
          }

          h2 {
            margin-bottom: 15px;
            font-size: 1.2rem;
            font-weight: 400;
            color: #6b5555;
          }

          .quote {
            margin-top: 10px;
            font-size: 1.1rem;
            font-style: italic;
            color: #7a6a6a;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>Rod Marty C. Mendoza</h1>
          <h2>BSIT NT - 4101</h2>
          <div class="quote">"Go with the flow"</div>
        </div>
      </body>
    </html>
  `;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
