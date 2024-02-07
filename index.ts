import { root } from "./templates/root";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req, server) {
    return new Response(
      root({
        html: `
        <div class="code">
          <code>
bun create imsteev/bench
          </code>
          <pre>
.
├── README.md
├── bun.lockb
├── index.ts
├── package.json
├── templates
│   ├── root.ts
│   └── utils.ts
└── tsconfig.json
</pre>
<a href="https://github.com/imsteev/bench" target="_blank">gh</a>

        </div>
        <div>
        Bun app serving HTMX
        </div>
        `,
        css: `html {
          background: #C3CED6;
          color: forestgreen;
        }

        code, pre {
          border-radius: 5px;
        }

        .code {
          padding: 1rem 2rem;
          background: #f2f2f2;
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
