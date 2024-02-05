import { page } from "./templates/root";

const server = Bun.serve({
  fetch(req, server) {
    return new Response(
      page({
        html: `<h1>Bench</h1>
        <div>
          <ul>
            <li><a href="https://bun.sh/docs" target="_blank">bun</a></li>
            <li><a href="https://htmx.org/reference/" target="_blank">htmx</a></li>
          </ul>
        </div>
        `,
        css: `html {
          background: forestgreen;
        }`,
      }),
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  },
});

console.log(`listening ${server.url}`);
