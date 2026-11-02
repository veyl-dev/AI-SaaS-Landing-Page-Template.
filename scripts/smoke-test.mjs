import {readFileSync,existsSync} from "node:fs";
import {join} from "node:path";
import assert from "node:assert/strict";
const root=process.cwd();
const pages=["index.html","features.html","pricing.html","about.html","contact.html","faq.html","admin/index.html"];
for(const page of pages){
  const path=join(root,page);
  assert.ok(existsSync(path),`Missing page: ${page}`);
  const html=readFileSync(path,"utf8");
  assert.match(html,/<html lang="en">/i,`${page}: missing language`);
  assert.match(html,/<meta name="viewport"/i,`${page}: missing viewport`);
  assert.match(html,/<title>[^<]+<\/title>/i,`${page}: missing title`);
}
for(const path of ["assets/css/styles.css","assets/js/config.js","assets/js/main.js","admin/admin.css","admin/admin.js","README.md","DOCUMENTATION.md","CODESTER-LISTING.md"]){
  assert.ok(existsSync(join(root,path)),`Missing required file: ${path}`);
}
const admin=readFileSync(join(root,"admin/index.html"),"utf8");
for(const feature of ["Customers","Plans & billing","AI activity","Inbox","Integrations","Settings"])assert.ok(admin.includes(feature),`Missing admin feature: ${feature}`);
assert.match(admin,/admin\.css/);
assert.match(admin,/admin\.js/);
const adminJs=readFileSync(join(root,"admin/admin.js"),"utf8");
assert.match(adminJs,/downloadCSV/);
assert.match(adminJs,/customer-search/);
assert.match(adminJs,/localStorage/);
const publicJs=readFileSync(join(root,"assets/js/main.js"),"utf8");
assert.match(publicJs,/admin\/index\.html/);
assert.match(publicJs,/contactEndpoint/);
console.log(`Smoke tests passed: ${pages.length} pages and dashboard assets/features are present.`);
