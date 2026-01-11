/************* HEADER *************/
const header = document.createElement("header");
header.textContent = "Welcome to My JS Website";
header.setAttribute(
  "style",
  "background:#4CAF50;color:white;padding:15px;font-size:22px;text-align:center;"
);
document.body.appendChild(header);
/************* MENU *************/
const menu = document.createElement("div");
menu.setAttribute("style", "text-align:center; margin:15px;");
menu.innerHTML = `
  <button onclick="homePage()">Home</button>
  <button onclick="servicePage()">Services</button>
   <button onclick="aboutPage()">About Me</button>
  <button onclick="contactPage()">Contact</button>
`;
document.body.appendChild(menu);

/************* MAIN *************/
const main = document.createElement("main");
main.setAttribute("style", "padding:20px;");
document.body.appendChild(main);

/************* HOME *************/
function homePage() {
  main.innerHTML = "";

  const divBox = document.createElement("div");
  divBox.setAttribute("style", "border:1px solid #333;padding:15px;width:300px;");

  const h2 = document.createElement("h2");
  h2.textContent = "Home Page";
  divBox.appendChild(h2);

  const ol = document.createElement("ol");
  const items = ["HTML Basics", "CSS Styling", "JavaScript Programming"];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });

  divBox.appendChild(ol);
  main.appendChild(divBox);
}
homePage();
/************* SERVICES *************/
function servicePage() {
  main.innerHTML = `
    <h2>Services</h2>
    <button onclick="chapter7()">Chapter 7</button>
    <button onclick="chapter8()">Chapter 8</button>
     <button onclick="chapter9()">Chapter 9</button>
    <div id="chapterBox" style="margin-top:15px;"></div>
  `;
}

/************* CHAPTER 7 *************/
function chapter7() {
  document.getElementById("chapterBox").innerHTML = `
    <h3>Chapter 7: Objects (Practical)</h3>

    <button onclick="objectLiteral()">Object Literal</button>
    <button onclick="constructorFunc()">Constructor Function</button>
    <button onclick="classSyntax()">Class Syntax</button>
    <button onclick="accessProperty()">Access Property</button>
    <button onclick="jsonExample()">JSON</button>

    <div id="output" style="margin-top:15px;border:1px solid #000;padding:10px;"></div>
  `;
}

/******** OBJECT LITERAL ********/
function objectLiteral() {
  let student = {
    name: "Nasteexo",
    faculty: "Computer Science",
    age: 20
  };

  document.getElementById("output").innerHTML =
    student.name + " - " + student.faculty + " - " + student.age;
}

/******** CONSTRUCTOR FUNCTION ********/
function constructorFunc() {
  function Car(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  let car1 = new Car("Toyota", 2022);

  document.getElementById("output").innerHTML =
    car1.brand + " - " + car1.year;
}

/******** CLASS SYNTAX ********/
function classSyntax() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  let p1 = new Person("Ali", 25);

  document.getElementById("output").innerHTML =
    p1.name + " - " + p1.age;
}

/******** ACCESS PROPERTY ********/
function accessProperty() {
  let student = {
    name: "Nasteexo",
    faculty: "Computer Science"
  };

  document.getElementById("output").innerHTML =
    student.name + " - " + student["faculty"];
}

/******** JSON ********/
function jsonExample() {
  let student = {
    name: "Nasteexo",
    faculty: "Computer Science"
  };

  let jsonData = JSON.stringify(student);

  document.getElementById("output").innerHTML = jsonData;
}
/************* CHAPTER 8/ *************/
function chapter8() {
  const chapterBox = document.getElementById("chapterBox");

  chapterBox.innerHTML = `
    <h3>Chapter 8: DOM & Functions Examples</h3>
    <p>Click buttons to see each example:</p>
    <div style="margin-bottom:10px;">
      <button onclick="exampleGetById()">Example 1: getElementById</button>
      <button onclick="exampleGetByClassName()">Example 2: getElementsByClassName & p tags</button>
      <button onclick="exampleQuerySelector()">Example 3: querySelector</button>
      <button onclick="example2QuerySelector()">Example 4: querySelector .box</button>
      <button onclick="exampleQuerySelectorAll()">Example 5: querySelectorAll p</button>
      <button onclick="changeBoxes()">Example 6: changeBoxes</button>
      <button onclick="myId()">Example 7: myId alert</button>
      <button onclick="getHref()">Example 8: getHref alert</button>
      <button onclick="myLinkStyle()">Example 9: style link</button>
      <button onclick="getParagraph()">Example 10: innerText/textContent</button>
      <button onclick="getAnchor()">Example 11: setAttribute anchor</button>
      <button onclick="addStyle()">Example 12: add inline style h1</button>
      <button onclick="addClass()">Example 13: add class h2</button>
      <button onclick="createParagraph()">Example 14: create paragraph</button>
      <button onclick="removeSpan()">Example 15: remove span</button>
      <button onclick="replacePara()">Example 16: replace paragraph</button>
      <button onclick="insertSpan()">Example 17: insert span</button>
    </div>
    <div id="exampleOutput" style="margin-top:15px;"></div>
  `;
  window.exampleGetById = function() {
    let content = document.getElementById("exampleOutput");
    if (!document.getElementById("content")) {
      const div = document.createElement("div");
      div.id = "content";
      div.innerText = "Hello from Example 1";
      content.appendChild(div);
    }
    document.getElementById("content").style.background = "blue";
    document.getElementById("content").style.color = "white";
  }

  window.exampleGetByClassName = function() {
    let output = document.getElementById("exampleOutput");
    let box = document.createElement("div");
    box.className = "box";
    box.innerText = "Box Example 2";
    output.appendChild(box);
    let boxes = document.getElementsByClassName("box");
    for (let i=0;i<boxes.length;i++){
      boxes[i].style.border="3px dashed black";
    }
  }

  window.exampleQuerySelector = function() {
    let p = document.createElement("p");
    p.innerText = "Example 3 paragraph";
    document.getElementById("exampleOutput").appendChild(p);
    document.querySelector("p").style.fontFamily = "Impact";
  }

  window.example2QuerySelector = function() {
    let firstBox = document.querySelector(".box");
    if(firstBox) firstBox.style.border="2px solid black";
  }

  window.exampleQuerySelectorAll = function() {
    let allPs = document.querySelectorAll("#exampleOutput p");
    allPs.forEach(p=>{p.style.color="red"; p.style.fontSize="18px";});
  }

  window.changeBoxes = function() {
    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(b=>{b.style.background="lightblue"; b.style.padding="10px"; b.style.margin="5px";});
  }

  window.myId = function() {
    let el = document.getElementById("content");
    if(el) alert(el.innerHTML);
  }

  window.getHref = function() {
    let link = document.getElementById("myLink");
    if(!link) {
      link = document.createElement("a");
      link.id="myLink";
      link.href="https://example.com";
      link.innerText="Visit Example";
      document.getElementById("exampleOutput").appendChild(link);
    }
    alert(link.href);
  }

  window.myLinkStyle = function() {
    let link = document.getElementById("myLink");
    if(link){
      link.style.textDecoration="none";
      link.style.backgroundColor="blue";
      link.style.color="white";
      link.style.padding="5px";
    }
  }

  window.getParagraph = function() {
    let para = document.getElementById("paraExample");
    if(!para){
      para = document.createElement("p");
      para.id="paraExample";
      document.getElementById("exampleOutput").appendChild(para);
    }
    para.innerText="innerText Example";
    para.textContent="textContent Example";
  }

  window.getAnchor = function() {
    let anchor = document.getElementById("myAnchor");
    if(!anchor){
      anchor = document.createElement("a");
      anchor.id="myAnchor";
      anchor.innerText="Anchor Example";
      document.getElementById("exampleOutput").appendChild(anchor);
    }
    anchor.setAttribute("class","anchor-class");
  }

  window.addStyle = function() {
    let h1 = document.getElementById("h1Example");
    if(!h1){
      h1 = document.createElement("h1");
      h1.id="h1Example";
      h1.innerText="H1 Example";
      document.getElementById("exampleOutput").appendChild(h1);
    }
    h1.style.backgroundColor="lightgreen";
    h1.style.color="white";
    h1.style.padding="10px";
  }

  window.addClass = function() {
    let h2 = document.getElementById("h2Example");
    if(!h2){
      h2 = document.createElement("h2");
      h2.id="h2Example";
      h2.innerText="H2 Example";
      document.getElementById("exampleOutput").appendChild(h2);
    }
    h2.setAttribute("class","demoClass");
  }

  window.createParagraph = function() {
    let p = document.createElement("p");
    p.innerText="Created paragraph Example 14";
    document.getElementById("exampleOutput").appendChild(p);
  }

  window.removeSpan = function() {
    let para = document.getElementById("paraSpan");
    if(!para){
      para = document.createElement("p");
      para.id="paraSpan";
      document.getElementById("exampleOutput").appendChild(para);
    }
    let span = document.getElementById("spanRemove");
    if(!span){
      span = document.createElement("span");
      span.id="spanRemove";
      span.innerText="Remove this span";
      para.appendChild(span);
    }
    para.removeChild(span);
  }

  window.replacePara = function() {
    let oldP = document.getElementById("replacePara");
    if(!oldP){
      oldP = document.createElement("p");
      oldP.id="replacePara";
      oldP.innerText="Old paragraph";
      document.getElementById("exampleOutput").appendChild(oldP);
    }
    let newP = document.createElement("p");
    newP.id="replacePara";
    newP.innerText="New paragraph Example 16";
    document.getElementById("exampleOutput").replaceChild(newP, oldP);
  }

  window.insertSpan = function() {
    let para = document.getElementById("paraInsert");
    if(!para){
      para = document.createElement("p");
      para.id="paraInsert";
      para.innerText="Parent paragraph:";
      document.getElementById("exampleOutput").appendChild(para);
    }
    let span = document.createElement("span");
    span.innerText=" New Span Example 17 ";
    para.appendChild(span);
  }
}
////////chapter9//////////////
function chapter9() {
  main.innerHTML = `
    <h2>Chapter 9: JavaScript Events</h2>
    <div id="chapter9Box"></div>
  `;

  const area = document.getElementById("chapter9Box");

  function createExample(title, codeText, runFunction) {
    let box = document.createElement("div");
    box.style.border = "1px solid black";
    box.style.padding = "10px";
    box.style.marginBottom = "15px";

    let h3 = document.createElement("h3");
    h3.textContent = title;

    let pre = document.createElement("pre");
    pre.textContent = codeText;

    let btn = document.createElement("button");
    btn.textContent = "Run Example";

    let output = document.createElement("div");
    output.style.marginTop = "10px";

    btn.onclick = () => {
      output.innerHTML = "";
      runFunction(output);
    };

    box.append(h3, pre, btn, output);
    area.appendChild(box);
  }

  //  CLICK
  createExample("Example 1: Click Event",
`button.addEventListener("click", ...)`,
  (o)=>{
    let b=document.createElement("button");
    b.textContent="Click Me";
    b.onclick=()=>o.textContent="Clicked!";
    o.appendChild(b);
  });

  //  DOUBLE CLICK
  createExample("Example 2: Double Click",
`element.addEventListener("dblclick", ...)`,
  (o)=>{
    let d=document.createElement("div");
    d.textContent="Double Click Me";
    d.ondblclick=()=>o.textContent="Double Clicked!";
    o.appendChild(d);
  });

  //  MOUSE OVER / OUT
  createExample("Example 3: Mouse Over & Out",
`mouseover / mouseout`,
  (o)=>{
    let b=document.createElement("div");
    b.textContent="Hover Me";
    b.onmouseover=()=>o.textContent="Mouse Over";
    b.onmouseout=()=>o.textContent="Mouse Out";
    o.appendChild(b);
  });

  //  KEYDOWN
  createExample("Example 4: Keydown",
`keydown event`,
  (o)=>{
    let i=document.createElement("input");
    i.onkeydown=e=>o.textContent="Key: "+e.key;
    o.appendChild(i);
  });

  //  FOCUS & BLUR
  createExample("Example 5: Focus & Blur",
`focus / blur`,
  (o)=>{
    let i=document.createElement("input");
    i.onfocus=()=>o.textContent="Focused";
    i.onblur=()=>o.textContent="Blurred";
    o.appendChild(i);
  });

  //  INPUT
  createExample("Example 6: Input Event",
`input event`,
  (o)=>{
    let i=document.createElement("input");
    i.oninput=()=>o.textContent=i.value;
    o.appendChild(i);
  });

  //  CHANGE
  createExample("Example 7: Change Event",
`change event`,
  (o)=>{
    let s=document.createElement("select");
    ["A","B","C"].forEach(v=>{
      let op=document.createElement("option");
      op.text=v; s.appendChild(op);
    });
    s.onchange=()=>o.textContent=s.value;
    o.appendChild(s);
  });

  //  SUBMIT
  createExample("Example 8: Submit Event",
`submit + preventDefault`,
  (o)=>{
    let f=document.createElement("form");
    let i=document.createElement("input");
    let b=document.createElement("button");
    b.textContent="Send";
    f.append(i,b);
    f.onsubmit=e=>{
      e.preventDefault();
      o.textContent="Form Submitted";
    };
    o.appendChild(f);
  });

  //  WINDOW LOAD
  createExample("Example 9: Window Load",
`window load`,
  (o)=>{
    window.onload=()=>o.textContent="Page Loaded";
  });

  //  SCROLL
  createExample("Example 10: Scroll",
`window scroll`,
  (o)=>{
    o.textContent="Scroll Page";
    window.onscroll=()=>o.textContent="Scrolling...";
  });

  //  EVENT DELEGATION
  createExample("Example 11: Event Delegation",
`parent click`,
  (o)=>{
    let d=document.createElement("div");
    for(let i=1;i<=3;i++){
      let b=document.createElement("button");
      b.textContent="Btn "+i;
      d.appendChild(b);
    }
    d.onclick=e=>{
      if(e.target.tagName==="BUTTON"){
        o.textContent=e.target.textContent+" clicked";
      }
    };
    o.appendChild(d);
  });
}
/************* ABOUT ME *************/
function aboutPage() {
  main.innerHTML = `
    <div style="
      max-width:600px;margin:20px auto;padding:20px;
      background:#f9f9f9;border-radius:15px;box-shadow:0 5px 10px rgba(0,0,0,0.1);
      font-family:sans-serif;color:#333;text-align:center;
    ">
      <img src="nasteha.jpeg" alt="Profile Picture" style="width:150px;height:150px;border-radius:50%;border:3px solid #4CAF50;margin-bottom:15px;">
      <h2 style="color:#4CAF50;margin-bottom:10px;">About Me</h2>
      <p><b>ID:</b> cs1500982</p>
      <p><b>Name:</b> Nasteexo Bashiir</p>
      <p><b>Faculty:</b> Computer Science</p>
      <p><b>Phone:</b> 0613195111</p>
      <h3 style="margin-top:20px;color:#4CAF50;">Skills & Projects</h3>
      <p>HTML, CSS, JavaScript, Python, Web Design</p>
      <a href="https://support.google.com/sites/?hl=en#topic=7184580" target="_blank" style="color:white;background:#4CAF50;padding:8px 15px;text-decoration:none;border-radius:5px;">Project 1</a>
      <a href="https://www.easy.tools/faq" target="_blank" style="color:white;background:#4CAF50;padding:8px 15px;text-decoration:none;border-radius:5px;margin-left:10px;">Project 2</a>
    </div>
  `;
}
/***** CONTACT *****/
function contactPage() {
  main.innerHTML = `
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Name"><br><br>
      <input type="email" placeholder="Email"><br><br>
      <textarea placeholder="Message"></textarea><br><br>
      <button type="submit">Send</button>
    </form>
  `;
}

/************* FOOTER *************/
const footer = document.createElement("footer");
footer.setAttribute(
  "style",
  "margin-top:30px;padding:10px;background:#333;color:white;text-align:center;"
);
footer.textContent = "Prepared by Class B";
document.body.appendChild(footer);