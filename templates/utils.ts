function escapeHTML(s?: string): string {
  if (!s) return "";
  // https://owasp.deteact.com/cheat/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#rule-1---html-escape-before-inserting-untrusted-data-into-html-element-content
  return s
    .replaceAll("&", "&amp")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("/", "&#x2F;");
}

// escapes user input
export function html(arr: TemplateStringsArray, ...args: any[]) {
  // would be cool if this was an actual buffer..
  let buf = "";
  arr.forEach((s) => {
    buf += s;
    const arg = args.shift();
    if (arg) {
      buf += escapeHTML(arg);
    }
  });
  return buf;
}
