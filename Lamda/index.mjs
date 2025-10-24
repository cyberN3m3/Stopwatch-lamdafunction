export const handler = async (event) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Serverless Stopwatch</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        background: #f9f9f9;
        margin-top: 100px;
      }
      h1 {
        font-size: 48px;
        color: #333;
        margin-bottom: 30px;
      }
      button {
        padding: 10px 20px;
        margin: 5px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        opacity: 0.8;
      }
      .start { background-color: #4CAF50; color: white; }
      .stop { background-color: #f44336; color: white; }
      .reset { background-color: #2196F3; color: white; }
    </style>
  </head>
  <body>
    <h1 id="display">00:00:00</h1>
    <button class="start" onclick="start()">Start</button>
    <button class="stop" onclick="stop()">Stop</button>
    <button class="reset" onclick="reset()">Reset</button>

    <script>
      let timer;
      let seconds = 0;

      function updateDisplay() {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        document.getElementById('display').innerText = \`\${hrs}:\${mins}:\${secs}\`;
      }

      function start() {
        if (!timer) {
          timer = setInterval(() => {
            seconds++;
            updateDisplay();
          }, 1000);
        }
      }

      function stop() {
        clearInterval(timer);
        timer = null;
      }

      function reset() {
        stop();
        seconds = 0;
        updateDisplay();
      }
    </script>
  </body>
  </html>
  `;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: htmlContent,
  };
};
