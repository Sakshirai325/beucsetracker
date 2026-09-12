const KEY="beuStudyCoachDataV1";
const seedSubjects=[
 {id:1,code:"BSC101",name:"Mathematics-I",credits:4,topics:["Differential Calculus","Integral Calculus","Matrices","Vector Algebra"]},
 {id:2,code:"BSC102",name:"Engineering Physics",credits:4,topics:["Wave Optics","Quantum Physics","Lasers","Semiconductors"]},
 {id:3,code:"BSC103",name:"Engineering Chemistry",credits:4,topics:["Atomic Structure","Chemical Bonding","Thermodynamics","Electrochemistry"]},
 {id:4,code:"ESC101",name:"Programming for Problem Solving",credits:3,topics:["C syntax and compilation","Variables and data types","Conditions and loops","Functions","Arrays and strings"]},
 {id:5,code:"ESC102",name:"Basic Electrical Engineering",credits:3,topics:["DC circuits","AC fundamentals","Transformers","Electrical safety"]},
 {id:6,code:"HSMC101",name:"Communication Skills",credits:2,topics:["Grammar foundations","Technical writing","Presentation skills","Communication practice"]}
];
const cLessons=[
 ["Basics","Introduction to C and compilation","C is a compiled, general-purpose language. A typical workflow is write, compile, run, test.","#include <stdio.h>\\nint main(void){ printf(\"Hello, C!\\\\n\"); return 0; }"],
 ["Basics","Variables and data types","Use int for whole numbers, float/double for decimals, and char for single characters." ,"int age = 18;\\ndouble score = 91.5;\\nchar grade = 'A';"],
 ["Basics","Input and output","printf displays formatted output and scanf reads values using addresses for most variables.","int n;\\nscanf(\"%d\", &n);\\nprintf(\"%d\", n);"],
 ["Basics","Operators and expressions","Arithmetic, relational, logical, and assignment operators help build expressions.","int total = a + b;\\nint isValid = (total > 0);"],
 ["Basics","If and switch","Use if for conditions and switch for selecting among discrete integral cases.","if (marks >= 40) printf(\"Pass\");\\nelse printf(\"Try again\");"],
 ["Basics","Loops","for, while, and do-while repeat work while a condition is satisfied.","for(int i=1;i<=5;i++){ printf(\"%d \", i); }"],
 ["Functions & Arrays","Functions","Functions split a program into reusable units with parameters and a return value.","int add(int a,int b){ return a+b; }"],
 ["Functions & Arrays","Recursion basics","A recursive function calls itself and must have a base case to stop.","int fact(int n){ return n<=1 ? 1 : n*fact(n-1); }"],
 ["Functions & Arrays","One-dimensional arrays","An array stores same-type values in contiguous indexed positions starting at zero.","int marks[3] = {70, 80, 90};"],
 ["Functions & Arrays","Two-dimensional arrays","A 2D array is useful for tables and matrices.","int matrix[2][2] = {{1,2},{3,4}};"],
 ["Functions & Arrays","Strings","C strings are character arrays terminated by a null character.","char name[20] = \"Student\";"],
 ["Pointers & Memory","Pointer basics","A pointer stores an address. Use & to get an address and * to dereference it.","int x=10;\\nint *p=&x;\\nprintf(\"%d\", *p);"],
 ["Pointers & Memory","Pointers and arrays","The array name often behaves like a pointer to its first element in expressions.","int a[3]={2,4,6};\\nint *p=a;"],
 ["Pointers & Memory","Dynamic memory","malloc allocates memory at runtime; always check and release it with free.","int *p = malloc(3*sizeof(int));\\nfree(p);"],
 ["Structures & Files","Structures","A struct groups related values of different types into one record.","struct Student { int roll; char name[30]; };"],
 ["Structures & Files","Union and enum","A union shares storage among members; an enum gives names to integer constants.","enum Day { MON, TUE, WED };"],
 ["Structures & Files","File I/O","Use fopen, fprintf/fscanf, and fclose for basic file operations.","FILE *f=fopen(\"data.txt\",\"w\");\\nfprintf(f,\"Hello\");\\nfclose(f);"],
 ["Problem Solving","Two pointers","Two pointers can scan a sequence from different positions to reduce nested work.","int l=0,r=n-1;\\nwhile(l<r){ /* inspect a[l], a[r] */ l++; r--; }"],
 ["Problem Solving","Prefix sums","Prefix sums answer range-sum queries quickly after linear preprocessing.","prefix[i]=prefix[i-1]+a[i];"],
 ["Hackathon Practice","Time and space complexity","Estimate how work and memory grow with input size. Prefer simple O(n) solutions when possible.","for(int i=0;i<n;i++) { /* O(n) */ }"]
];
const pyqPapers=[
 {id:1,subject:"Programming for Problem Solving",year:2025,type:"End Semester",questions:[
  ["Which type stores a whole number in C?",["int","char","float","double"],0,"int is commonly used for whole numbers."],
  ["What is the first valid index of an array?",["0","1","-1","Depends on compiler"],0,"C arrays use zero-based indexing."],
  ["Which symbol obtains a variable's address?",["*","&","%","#"],1,"The address-of operator is &."],
  ["Which loop is guaranteed to execute at least once?",["for","while","do-while","None"],2,"A do-while checks its condition after the body."]
 ]},
 {id:2,subject:"Mathematics-I",year:2024,type:"End Semester",questions:[
  ["The derivative of x² is:",["x","2x","x²","2"],1,"Using the power rule, d(x²)/dx = 2x."],
  ["A square matrix with equal rows and columns is called:",["Rectangular","Square","Diagonal only","Scalar only"],1,"A square matrix has the same number of rows and columns."]
 ]},
 {id:3,subject:"Engineering Physics",year:2025,type:"End Semester",questions:[
  ["The SI unit of frequency is:",["Newton","Hertz","Joule","Tesla"],1,"Frequency is measured in hertz (Hz)."],
  ["LASER light is generally:",["Incoherent","Coherent","Only ultraviolet","Always invisible"],1,"Laser light is characterized by strong coherence."]
 ]}
];
const problems=[
 ["Easy","Sum of array","Read n integers and calculate their sum.","Use a loop and an accumulator.","O(n) time."],
 ["Easy","Count vowels","Count vowels in a lowercase string.","Check each character against a,e,i,o,u.","Return the count."],
 ["Easy","Reverse digits","Reverse the digits of a positive integer.","Repeatedly take n % 10.","Build the reversed number."],
 ["Medium","Second largest","Find the second-largest distinct value in an array.","Track largest and second largest.","Handle duplicate maximums."],
 ["Medium","Balanced brackets","Check whether brackets are balanced using a stack idea.","Push opening brackets and match closing brackets.","An empty stack at the end means success."],
 ["Medium","Student records","Store and print three student records using a struct.","Define a struct and fill an array.","Loop through the records."],
 ["Hard","Recursive power","Compute a^b recursively using a base case.","For even b, split the exponent.","Use exponentiation by squaring."],
 ["Hard","Merge sorted arrays","Merge two sorted arrays into one sorted result.","Use two indexes.","Advance the smaller current value."]
];

let data=loadData(), currentPage="home", selectedSubject=null, quizState=null;
function defaultData(){return {profile:{name:"",theme:"light",onboarded:false},topics:{},schedule:seedSchedule(),logs:[],attempts:[],lessons:{},problems:{}}}
function seedSchedule(){const d=new Date().toISOString().slice(0,10);return[
 {id:1,date:d,start:"09:00",end:"10:00",type:"CLASS",title:"Mathematics-I",done:false},
 {id:2,date:d,start:"10:00",end:"11:00",type:"CLASS",title:"Programming for Problem Solving",done:false},
 {id:3,date:d,start:"19:00",end:"20:00",type:"SELF_STUDY",title:"C practice",done:false}
]}
function loadData(){try{return Object.assign(defaultData(),JSON.parse(localStorage.getItem(KEY)||"{}"))}catch(e){return defaultData()}}
function save(){localStorage.setItem(KEY,JSON.stringify(data))}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function today(){return new Date().toISOString().slice(0,10)}
function fmtDate(d){return new Date(d+"T00:00:00").toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"})}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function topicStatus(subjectId,index){return data.topics[`${subjectId}-${index}`]||"NOT_STARTED"}
function setTopic(subjectId,index,status){data.topics[`${subjectId}-${index}`]=status;save();render()}
function progress(){let total=0,done=0;seedSubjects.forEach(s=>s.topics.forEach((_,i)=>{total++;if(topicStatus(s.id,i)==="COMPLETED")done++}));return {total,done,pct:total?Math.round(done*100/total):0}}
function init(){
 document.getElementById("themeBtn").onclick=()=>{data.profile.theme=data.profile.theme==="dark"?"light":"dark";save();applyTheme()}
 document.getElementById("startBtn").onclick=()=>{const n=document.getElementById("profileName").value.trim();if(!n)return toast("Please enter your name");data.profile.name=n;data.profile.onboarded=true;save();showApp()}
 document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>{currentPage=b.dataset.page;render()})
 applyTheme(); data.profile.onboarded?showApp():showOnboarding()
}
function applyTheme(){document.documentElement.dataset.theme=data.profile.theme==="dark"?"dark":"light";document.getElementById("themeBtn").textContent=data.profile.theme==="dark"?"☀️":"🌙"}
function showOnboarding(){document.getElementById("onboarding").classList.remove("hidden");document.getElementById("mainApp").classList.add("hidden")}
function showApp(){document.getElementById("onboarding").classList.add("hidden");document.getElementById("mainApp").classList.remove("hidden");render()}
function render(){
 applyTheme();document.getElementById("pageTitle").textContent={home:"Home",schedule:"Schedule",syllabus:"Syllabus",pyq:"PYQ Quiz",learn:"Learn C",more:"More"}[currentPage];
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===currentPage));
 const views={home:homeView,schedule:scheduleView,syllabus:syllabusView,pyq:pyqView,learn:learnView,more:moreView};
 document.getElementById("content").innerHTML=views[currentPage]();bindView();
}
function homeView(){
 const p=progress(), name=esc(data.profile.name||"Student"), items=data.schedule.filter(x=>x.date===today()).sort((a,b)=>a.start.localeCompare(b.start));
 return `<div class="card hero"><div class="muted">Good ${new Date().getHours()<12?"morning":new Date().getHours()<18?"afternoon":"evening"},</div><h2>${name} 👋</h2><div class="muted">${fmtDate(today())}</div><div class="section-title"><h2>Semester progress</h2><strong>${p.pct}%</strong></div><div class="progress"><div style="width:${p.pct}%"></div></div><small>${p.done} of ${p.total} topics completed</small></div>
 <div class="grid"><div class="card"><div class="muted">Study activity</div><div class="stat">${data.schedule.filter(x=>x.done).length}</div><small>completed tasks</small></div><div class="card"><div class="muted">Quiz attempts</div><div class="stat">${data.attempts.length}</div><small>saved locally</small></div></div>
 <div class="section-title"><h2>Quick actions</h2></div><div class="grid"><button class="primary" onclick="openLogModal()">📝 Log Self-Help</button><button class="secondary" onclick="currentPage='learn';render()">💻 C Practice</button><button class="secondary" onclick="currentPage='pyq';render()">📚 Take PYQ</button><button class="secondary" onclick="currentPage='syllabus';render()">📖 Syllabus</button></div>
 <div class="section-title"><h2>Today's schedule</h2><button class="small-btn" onclick="currentPage='schedule';render()">View all</button></div><div class="card">${items.length?items.map(scheduleRow).join(""):'<div class="empty">No tasks for today.</div>'}</div>`;
}
function scheduleRow(x){return `<div class="list-item schedule-item ${x.done?"done":""}"><div class="grow"><div class="item-title"><b>${esc(x.title)}</b></div><small class="muted">${x.start}–${x.end} • ${x.type}</small></div><input type="checkbox" ${x.done?"checked":""} onchange="toggleSchedule(${x.id},this.checked)"> </div>`}
function scheduleView(){
 const d=window.scheduleDate||today(), items=data.schedule.filter(x=>x.date===d).sort((a,b)=>a.start.localeCompare(b.start));
 return `<div class="card"><div class="row"><button class="small-btn" onclick="changeDay(-1)">←</button><div><b>${fmtDate(d)}</b><div class="muted">${items.length} item(s)</div></div><button class="small-btn" onclick="changeDay(1)">→</button></div></div><button class="primary full" onclick="openScheduleModal()">＋ Add schedule item</button><div class="card">${items.length?items.map(scheduleRow).join(""):'<div class="empty">Nothing planned. Add a study block or task.</div>'}</div><div class="section-title"><h2>Monthly activity</h2></div>${calendarView()}`;
}
function changeDay(n){const d=new Date((window.scheduleDate||today())+"T00:00:00");d.setDate(d.getDate()+n);window.scheduleDate=d.toISOString().slice(0,10);render()}
function calendarView(){const now=new Date((window.scheduleDate||today())+"T00:00:00"), y=now.getFullYear(),m=now.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();let h='<div class="calendar"><div class="head">Sun</div><div class="head">Mon</div><div class="head">Tue</div><div class="head">Wed</div><div class="head">Thu</div><div class="head">Fri</div><div class="head">Sat</div>';for(let i=0;i<first;i++)h+="<div></div>";for(let day=1;day<=days;day++){const d=`${y}-${String(m+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`,has=data.schedule.some(x=>x.date===d);h+=`<div class="day ${d===today()?"today":""} ${has?"marked":""}" onclick="window.scheduleDate='${d}';render()">${day}${has?"<br>•":""}</div>`}return h+"</div>"}
function syllabusView(){
 if(selectedSubject){const s=seedSubjects.find(x=>x.id===selectedSubject);const done=s.topics.filter((_,i)=>topicStatus(s.id,i)==="COMPLETED").length;return `<button class="small-btn" onclick="selectedSubject=null;render()">← All subjects</button><div class="section-title"><h2>${esc(s.name)}</h2><span class="badge">${done}/${s.topics.length} complete</span></div><div class="card">${s.topics.map((t,i)=>`<div class="list-item"><div class="grow"><b>${esc(t)}</b><div class="topic-actions">${["NOT_STARTED","IN_PROGRESS","COMPLETED"].map(st=>`<button class="${topicStatus(s.id,i)===st?"active":""}" onclick="setTopic(${s.id},${i},'${st}')">${st.replace("_"," ")}</button>`).join("")}</div></div></div>`).join("")}</div>`}
 const p=progress();return `<div class="card hero"><div class="row"><div><div class="muted">Overall semester progress</div><div class="stat">${p.pct}%</div></div><div style="font-size:35px">📚</div></div><div class="progress"><div style="width:${p.pct}%"></div></div></div>${seedSubjects.map(s=>{const d=s.topics.filter((_,i)=>topicStatus(s.id,i)==="COMPLETED").length,pct=Math.round(d/s.topics.length*100);return `<div class="card" onclick="selectedSubject=${s.id};render()" style="cursor:pointer"><div class="row"><div><b>${esc(s.name)}</b><div class="muted">${s.code} • ${s.credits} credits</div></div><span class="badge">${pct}%</span></div><div class="progress" style="margin-top:12px"><div style="width:${pct}%"></div></div></div>`}).join("")}`;
}
function pyqView(){
 if(quizState)return quizScreen();
 return `<div class="card"><h2>BEU PYQ Practice</h2><p class="muted">Original short practice summaries inspired by first-semester topics. Works offline.</p></div>${pyqPapers.map(p=>`<div class="card"><div class="row"><div><b>${p.subject}</b><div class="muted">${p.year} • ${p.type}</div></div><span class="badge">${p.questions.length} Qs</span></div><button class="primary full" onclick="startQuiz(${p.id})">Start quiz</button></div>`).join("")}<div class="section-title"><h2>Past attempts</h2></div><div class="card">${data.attempts.length?data.attempts.slice().reverse().map(a=>`<div class="list-item"><div class="grow"><b>${esc(a.paper)}</b><div class="muted">${new Date(a.date).toLocaleString()}</div></div><span class="badge">${a.score}/${a.total}</span></div>`).join(""):'<div class="empty">No attempts yet.</div>'}</div>`;
}
function startQuiz(id){const p=pyqPapers.find(x=>x.id===id);quizState={paper:p,index:0,answers:[],started:Date.now()};render()}
function quizScreen(){const q=quizState.paper.questions[quizState.index];return `<div class="card"><div class="row"><span class="badge">Question ${quizState.index+1}/${quizState.paper.questions.length}</span><span class="muted">${quizState.paper.subject}</span></div><h2>${esc(q[0])}</h2>${q[1].map((o,i)=>`<button class="secondary full" style="text-align:left" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join("")}</div>`}
function answerQuiz(i){quizState.answers.push(i);quizState.index++;if(quizState.index>=quizState.paper.questions.length){const score=quizState.answers.reduce((n,a,i)=>n+(a===quizState.paper.questions[i][2]?1:0),0);data.attempts.push({paper:quizState.paper.subject+" "+quizState.paper.year,score,total:quizState.paper.questions.length,date:new Date().toISOString()});save();toast(`Quiz complete: ${score}/${quizState.paper.questions.length}`);quizState=null}render()}
function learnView(){
 const modules=[...new Set(cLessons.map(x=>x[0]))];return `<div class="card hero"><h2>Learn C for hackathons</h2><p class="muted">Short offline lessons, examples, and practice problems.</p><div class="stat">${Object.values(data.lessons).filter(Boolean).length}/${cLessons.length}</div><small>lessons completed</small></div><div class="tabs">${modules.map(m=>`<button onclick="window.learnModule='${m}';render()" class="${(window.learnModule||modules[0])===m?"active":""}">${m}</button>`).join("")}</div>${cLessons.filter(x=>x[0]===(window.learnModule||modules[0])).map((x,i)=>{const idx=cLessons.indexOf(x);return `<div class="card"><div class="row"><span class="badge">${x[0]}</span><button class="small-btn" onclick="toggleLesson(${idx})">${data.lessons[idx]?"✓ Completed":"Mark done"}</button></div><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p><pre class="code">${esc(x[3])}</pre><button class="secondary" onclick="copyText(${JSON.stringify(x[3])})">Copy snippet</button></div>`}).join("")}<div class="section-title"><h2>Practice problems</h2></div>${problems.map((p,i)=>`<div class="card"><div class="row"><span class="badge ${p[0]==="Hard"?"danger":p[0]==="Medium"?"warning":"success"}">${p[0]}</span><button class="small-btn" onclick="toggleProblem(${i})">${data.problems[i]?"✓ Solved":"Mark solved"}</button></div><h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><div class="muted"><b>Hint:</b> ${esc(p[3])}</div><div class="muted"><b>Outline:</b> ${esc(p[4])}</div></div>`).join("")}`;
}
function toggleLesson(i){data.lessons[i]=!data.lessons[i];save();render()}
function toggleProblem(i){data.problems[i]=!data.problems[i];save();render()}
function copyText(t){navigator.clipboard?.writeText(t);toast("Snippet copied")}
function moreView(){return `<div class="card"><h2>Self-Help Journal</h2><p class="muted">Write reflections, study notes, motivation, or career ideas. Stored on this device.</p><button class="primary full" onclick="openLogModal()">＋ Add journal entry</button></div><div class="card">${data.logs.length?data.logs.slice().reverse().map((l,i)=>`<div class="list-item"><div class="grow"><b>${esc(l.title)}</b><div class="muted">${new Date(l.date).toLocaleString()} • Mood ${l.mood}/5</div><p>${esc(l.content)}</p><span class="badge">${esc(l.tag)}</span></div><button class="danger" onclick="deleteLog(${data.logs.length-1-i})">Delete</button></div>`).join(""):'<div class="empty">No journal entries yet.</div>'}</div><div class="card"><h2>Settings & data</h2><label>Name<input id="editName" value="${esc(data.profile.name)}"></label><button class="secondary full" onclick="saveProfile()">Save profile</button><button class="secondary full" onclick="exportData()">Export all data as JSON</button><button class="danger full" onclick="clearData()">Clear user data</button><p class="muted">Seed syllabus, sample timetable, PYQs, and C content are included in the app source.</p></div>`}
function modal(html){const d=document.createElement("div");d.className="modal-backdrop";d.id="modal";d.innerHTML=`<div class="modal">${html}</div>`;document.body.appendChild(d)}
function closeModal(){document.getElementById("modal")?.remove()}
function openLogModal(){modal(`<h2>New journal entry</h2><label>Title<input id="logTitle" placeholder="What did you learn today?"></label><label>Content<textarea id="logContent" placeholder="Write your reflection..."></textarea></label><label>Tag<select id="logTag"><option>Study</option><option>Motivation</option><option>Career</option><option>Hackathon</option><option>Health</option></select></label><label>Mood (1–5)<input id="logMood" type="number" min="1" max="5" value="4"></label><div class="modal-actions"><button class="secondary" onclick="closeModal()">Cancel</button><button class="primary" onclick="saveLog()">Save</button></div>`)}
function saveLog(){const title=document.getElementById("logTitle").value.trim(),content=document.getElementById("logContent").value.trim();if(!title||!content)return toast("Add a title and content");data.logs.push({title,content,tag:document.getElementById("logTag").value,mood:Number(document.getElementById("logMood").value)||3,date:new Date().toISOString()});save();closeModal();toast("Journal saved");render()}
function deleteLog(i){if(confirm("Delete this journal entry?")){data.logs.splice(i,1);save();render()}}
function openScheduleModal(){const d=window.scheduleDate||today();modal(`<h2>Add schedule item</h2><label>Date<input id="sDate" type="date" value="${d}"></label><div class="grid"><label>Start<input id="sStart" type="time" value="19:00"></label><label>End<input id="sEnd" type="time" value="20:00"></label></div><label>Type<select id="sType"><option>SELF_STUDY</option><option>CLASS</option><option>LAB</option><option>ASSIGNMENT</option><option>OTHER</option></select></label><label>Title<input id="sTitle" placeholder="C practice"></label><div class="modal-actions"><button class="secondary" onclick="closeModal()">Cancel</button><button class="primary" onclick="saveSchedule()">Save</button></div>`)}
function saveSchedule(){const title=document.getElementById("sTitle").value.trim();if(!title)return toast("Enter a title");data.schedule.push({id:Date.now(),date:document.getElementById("sDate").value,start:document.getElementById("sStart").value,end:document.getElementById("sEnd").value,type:document.getElementById("sType").value,title,done:false});save();closeModal();toast("Schedule item added");render()}
function toggleSchedule(id,done){const x=data.schedule.find(x=>x.id===id);if(x){x.done=done;save();render()}}
function saveProfile(){const n=document.getElementById("editName").value.trim();if(n){data.profile.name=n;save();toast("Profile saved");render()}}
function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="beu-study-coach-data.json";a.click();URL.revokeObjectURL(a.href)}
function clearData(){if(confirm("Clear journal, progress, schedule, and attempts?")){const profile=data.profile;data=defaultData();data.profile=profile;save();toast("User data cleared");render()}}
init();
if ("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
