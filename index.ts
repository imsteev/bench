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
        <div class="code">
          <pre>
├── README.md
├── bun.lockb
├── index.ts
├── package.json
├── templates
│   ├── root.ts
│   └── utils.ts
└── tsconfig.json
</pre>
<a href="https://github.com/imsteev/bench">repo</a>
        </div>
        `,
        css: `html {
          background: #C3CED6;
          color: forestgreen;
        }

        code, pre {
          background: #A7B8C3;
          padding: 1rem;
          border-radius: 5px;
          align-items: flex-start;
        }

        .code {
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
