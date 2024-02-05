import { page } from "./templates/root";

const server = Bun.serve({
  fetch(req) {
    return new Response(
      page({
        html: `It is ${new Date()}
        <div>
          <a href="https://htmx.org/reference/" target="_blank">htmx</a>
          <a href="https://bun.sh/docs" target="_blank">bun</a>
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
