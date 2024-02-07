import { CSS_RESET } from "./css";

// NOTE: make sure to escape untrusted user inputs!
export function root(props: { html: string; css?: string }) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script>
        <style>
          ${CSS_RESET}
          ${CSS_APP}
          ${props.css || ""}
        </style>
      </head>
      <body hx-boost="true">
        <main>
          <div class="page">${props.html}</div>
        </main>
      </body>
    </html>`;
}

// change me however you want!
const CSS_APP = `
html {
  font-size: 1.1rem;
  padding: 2rem;
  font-family: Helvetica, sans-serif;
  margin: auto;
  width: 80%;
}

a, button {
  font-size: 0.8rem;
}

button {
  font-size: 0.9rem;
  background: #F0F5FE;
  cursor: pointer;
  color: #1761E8;
  border: solid 1px #4580ED;
}

button:hover {
  opacity: 0.9;
}

/* app-specific */
.header {
  display: flex;
  width: min(100%, 80ch);
  padding: 1rem 0.25rem;
  justify-content: center;
}

html, input {
  color: lightblue;
}

input {
  padding: 2px;
}

input, textarea {
  border-color: #4B443C;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  padding: 16px 32px;
}

.form-container.admin-form {
  width: min(100%, 40ch);
}

form .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

form .errors {
  color: red;
}
`;
