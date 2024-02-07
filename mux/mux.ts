type Pattern = string | RegExp;

type RequestHandler = (
  req: Request,
  routeParams?: Record<string, string>
) => Response | Promise<Response>;

type Handler = [
  method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE",
  pattern: Pattern,
  fn: RequestHandler
];

class Mux {
  handlers!: Handler[];

  constructor() {
    this.handlers = [];
  }

  get(pattern: Pattern, fn: RequestHandler) {
    this.handlers.push(["GET", pattern, fn]);
    return this;
  }

  post(pattern: Pattern, fn: RequestHandler) {
    this.handlers.push(["POST", pattern, fn]);
    return this;
  }

  patch(pattern: Pattern, fn: RequestHandler) {
    this.handlers.push(["PATCH", pattern, fn]);
    return this;
  }

  delete(pattern: Pattern, fn: RequestHandler) {
    this.handlers.push(["DELETE", pattern, fn]);
    return this;
  }

  put(pattern: Pattern, fn: RequestHandler) {
    this.handlers.push(["PUT", pattern, fn]);
    return this;
  }

  handle(req: Request) {
    for (const handler of this.handlers) {
      if (req.method !== handler[0]) {
        continue;
      }
      const url = new URL(req.url);
      const match = url.pathname.match(handler[1]);
      if (!match) {
        continue;
      }
      return handler[2](req, match.groups);
    }

    return new Response("bad request", { status: 400 });
  }
}

export { Mux };
