(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const customers = [
    ["Maya Chen","maya.chen@example.com","Pro","Nov 01, 2026","Active"],
    ["Jordan Lee","jordan.lee@example.com","Team","Oct 30, 2026","Active"],
    ["Sam Rivera","sam.rivera@example.com","Starter","Oct 29, 2026","Trial"],
    ["Taylor Brooks","taylor.brooks@example.com","Pro","Oct 28, 2026","Active"],
    ["Avery Patel","avery.patel@example.com","Starter","Oct 26, 2026","Past due"],
    ["Morgan Ellis","morgan.ellis@example.com","Team","Oct 24, 2026","Active"],
    ["Riley Kim","riley.kim@example.com","Pro","Oct 22, 2026","Paused"]
  ];
  const activity = [
    ["Maya Chen","Upgraded to Pro","Pro","2 min ago","Active"],
    ["Jordan Lee","Invited 3 teammates","Team","18 min ago","Active"],
    ["Sam Rivera","Started a free trial","Starter","1 hour ago","Trial"],
    ["Taylor Brooks","Generated 24 AI reports","Pro","3 hours ago","Active"]
  ];
  const subscriptions = [
    ["Maya Chen","Pro","$29 / month","Dec 01, 2026","Active"],
    ["Jordan Lee","Team","$79 / month","Nov 30, 2026","Active"],
    ["Sam Rivera","Starter","$0 / month","Nov 29, 2026","Trial"],
    ["Avery Patel","Pro","$29 / month","Oct 30, 2026","Past due"],
    ["Morgan Ellis","Team","$79 / month","Nov 24, 2026","Active"]
  ];
  const messages = [
    ["Olivia Grant","olivia.grant@example.com","Question about the Team plan","Does the Team plan support separate workspaces?","Today · 9:42 AM"],
    ["Noah Williams","noah.williams@example.com","API access request","Could you share more details about API access?","Today · 8:15 AM"],
    ["Isabella Cruz","isabella.cruz@example.com","Update billing details","I would like to update our billing email address.","Yesterday · 4:30 PM"]
  ];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const initials = name => name.split(/\s+/).map(part=>part[0]).slice(0,2).join("").toUpperCase();
  const badge = status => '<span class="status-tag '+(status==="Trial"||status==="Past due"?"pending":status==="Paused"?"paused":"")+'">'+escapeHTML(status)+'</span>';
  const person = name => '<span class="person-cell"><span class="person-avatar">'+escapeHTML(initials(name))+'</span><span><b>'+escapeHTML(name)+'</b></span></span>';
  function fillTable(selector, rows, mode) {
    const target=$(selector); if(!target) return;
    target.innerHTML=rows.map(row=>{
      if(mode==="activity") return '<tr><td>'+person(row[0])+'</td><td>'+escapeHTML(row[1])+'</td><td>'+escapeHTML(row[2])+'</td><td>'+escapeHTML(row[3])+'</td><td>'+badge(row[4])+'</td></tr>';
      if(mode==="customers") return '<tr><td>'+person(row[0])+'</td><td>'+escapeHTML(row[1])+'</td><td>'+escapeHTML(row[2])+'</td><td>'+escapeHTML(row[3])+'</td><td>'+badge(row[4])+'</td></tr>';
      return '<tr><td>'+person(row[0])+'</td><td>'+escapeHTML(row[1])+'</td><td>'+escapeHTML(row[2])+'</td><td>'+escapeHTML(row[3])+'</td><td>'+badge(row[4])+'</td></tr>';
    }).join("") || '<tr><td colspan="5">No matching records.</td></tr>';
  }
  fillTable("#recent-activity",activity,"activity");
  fillTable("#customer-table",customers,"customers");
  fillTable("#plan-table",subscriptions,"subscriptions");
  const sectionNames={overview:"Overview",customers:"Customers","plans":"Plans & billing",activity:"AI activity",inbox:"Inbox",integrations:"Integrations",settings:"Settings"};
  function openView(id) {
    if(!sectionNames[id]) return;
    $$(".admin-view").forEach(section=>section.classList.toggle("active",section.id===id));
    $$(".nav-link").forEach(button=>button.classList.toggle("active",button.dataset.view===id));
    $("#current-section").textContent=sectionNames[id];
    $("#admin-sidebar").classList.remove("open");
    document.title="Neura — "+sectionNames[id];
  }
  $$(".nav-link").forEach(button=>button.addEventListener("click",()=>openView(button.dataset.view)));
  $$("[data-open-view]").forEach(button=>button.addEventListener("click",()=>openView(button.dataset.openView)));
  $("#mobile-menu")?.addEventListener("click",()=>$("#admin-sidebar").classList.toggle("open"));
  $("#dismiss-notice")?.addEventListener("click",()=>$(".preview-notice").remove());
  $("#customer-search")?.addEventListener("input",event=>{
    const query=event.target.value.trim().toLowerCase();
    const filtered=customers.filter(row=>row.join(" ").toLowerCase().includes(query));
    fillTable("#customer-table",filtered,"customers");
  });
  function downloadCSV(filename, headings, rows) {
    const quote=value=>'"'+String(value).replace(/"/g,'""')+'"';
    const csv=[headings,...rows].map(row=>row.map(quote).join(",")).join("\r\n");
    const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
    const anchor=document.createElement("a");anchor.href=url;anchor.download=filename;document.body.appendChild(anchor);anchor.click();anchor.remove();URL.revokeObjectURL(url);
  }
  $("#export-overview")?.addEventListener("click",()=>downloadCSV("neura-overview-demo.csv",["Name","Activity","Plan","When","Status"],activity));
  $("#export-plans")?.addEventListener("click",()=>downloadCSV("neura-subscriptions-demo.csv",["Customer","Plan","Price","Next billing","Status"],subscriptions));
  $("#export-usage")?.addEventListener("click",()=>downloadCSV("neura-ai-usage-demo.csv",["Metric","Sample value"],[["Requests today","12804"],["Token volume","8.6M"],["Average latency","840ms"]]));
  $("#invite-customer")?.addEventListener("click",()=>window.alert("Demo interaction only. Connect an authenticated customer-management API to invite real users."));
  $("#inbox-list").innerHTML=messages.map((message,index)=>'<article class="inbox-item"><div><b>'+escapeHTML(message[2])+'</b><p>'+escapeHTML(message[0])+' · '+escapeHTML(message[1])+'</p><p>'+escapeHTML(message[3])+'</p><small>'+escapeHTML(message[4])+'</small></div><button type="button" data-mark-read="'+index+'">Mark as read</button></article>').join("");
  $$("[data-mark-read]").forEach(button=>button.addEventListener("click",()=>{button.textContent="Read";button.disabled=true;}));
  $$(".integration-demo").forEach(button=>button.addEventListener("click",()=>window.alert("Demo only. Add your own provider credentials and secure server-side integration.")));
  const settingsFields=["workspace-name","support-email","workspace-timezone","email-notifications","weekly-summary"];
  try {
    const saved=JSON.parse(localStorage.getItem("neura-admin-demo-settings")||"{}");
    settingsFields.forEach(id=>{if(saved[id]!==undefined){const field=$("#"+id);if(field.type==="checkbox")field.checked=Boolean(saved[id]);else field.value=saved[id];}});
  } catch(error) { /* Storage may be unavailable in private browsing. */ }
  $("#save-settings")?.addEventListener("click",()=>{
    const values={};settingsFields.forEach(id=>{const field=$("#"+id);values[id]=field.type==="checkbox"?field.checked:field.value;});
    try{localStorage.setItem("neura-admin-demo-settings",JSON.stringify(values));$("#settings-feedback").textContent="Saved in this browser preview. No server data was changed.";}
    catch(error){$("#settings-feedback").textContent="Browser storage is unavailable. No changes were saved.";}
  });
})();