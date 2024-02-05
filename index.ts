import { page } from "./templates/root";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req, server) {
    return new Response(
      page({
        html: `
        <h1>My bench</h1>

        <div class="code">
          <code>
bun create imsteev/bench
          </code>
        </div>
        `,
        css: `html {
          background: #C3CED6;
        }

        h1 {
          color: forestgreen;
        }

        code {
          background: #36454F;
          padding: 1rem;
          border-radius: 5px;
        }

        .code {
          display: inline-block;
          margin-top: 2rem;
        }
        `,
      }),
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  },
});

console.log(`listening ${server.url}`);
