import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";
const root = process.cwd();
const pages = ["index.html","features.html","pricing.html","about.html","contact.html","faq.html"];
for (const page of pages) {
  const path = join(root,page);
  assert.ok(existsSync(path), `Missing page: ${page}`);
  const html = readFileSync(path,"utf8");
  assert.match(html,/<html lang="en">/i,`${page}: missing language`);
  assert.match(html,/<meta name="viewport"/i,`${page}: missing viewport`);
  assert.match(html,/<title>[^<]+<\/title>/i,`${page}: missing title`);
  assert.match(html,/assets\/css\/styles\.css/, `${page}: missing stylesheet`);
  assert.match(html,/assets\/js\/main\.js/, `${page}: missing shared script`);
}
for (const path of ["assets/css/styles.css","assets/js/config.js","assets/js/main.js","README.md","DOCUMENTATION.md"]) assert.ok(existsSync(join(root,path)),`Missing required file: ${path}`);
const css=readFileSync(join(root,"assets/css/styles.css"),"utf8");
assert.match(css,/@media\(max-width:640px\)/,`Missing mobile breakpoint`);
const js=readFileSync(join(root,"assets/js/main.js"),"utf8");
assert.match(js,/contactEndpoint/,`Missing contact integration configuration`);
console.log(`Smoke tests passed: ${pages.length} pages and shared assets present.`);