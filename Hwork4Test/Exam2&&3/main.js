const doc = document;
//samo da skratim

function crEl(element) {
  return doc.createElement(element);
}
//funckija za skraceno pravljenje elemenata

function rndGen() {
  return Math.floor(Math.random() * Math.floor(6));
}
//generiranje rando vrijednosti do 6

function mouseOverLi(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.style.background = "gray";

}
//funckija boji listu na mouser over

function mouseLeaveLi(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.style.background = "white";
}
//vraca listu u prvobitno stanje nakon sto mis napusti zonu

function colorizeInstruction(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.style.border = "5px solid red";

}
//funkcija za colorize koja boji box

function removeInstruction(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.parentElement.removeChild(e.target);
}
//funkcija za remove button koja brise target element


doc.addEventListener("click", function (e) {
  let button = e.target.id;

  switch (button) {
    case "generate": {
      const ul = document.getElementsByTagName("ul");
      if (ul.length > 0)
        doc.body.removeChild(ul[0]);
      //ne dozvoljava da se liste gomilaju, svaki put je nova

      if (doc.body.lastChild.nodeName == "DIV")
        doc.body.removeChild(doc.body.lastChild);
      //ne da gomilanje divova za drag&drop

      const list = crEl("ul");

      for (let i = 0; i < rndGen() + 4; i++) {
        const li = crEl("li");
        li.innerText = "Item " + (i + 1);
        li.setAttribute("draggable", "true");
        li.addEventListener("dragstart", function (e) {
          e.stopPropagation();
          object = li;
        });
        li.addEventListener("mouseover", mouseOverLi);
        li.addEventListener("mouseleave", mouseLeaveLi);
        list.appendChild(li);
      }
      //generisani list itemi i dodani listeneri za oznacavanje prelaska misem preko list itema, kao i listener za dragstart

      doc.body.appendChild(list);

      const secondElement = list.firstElementChild.nextSibling;
      secondElement.innerHTML = "";
      const a = crEl("a");
      a.innerHTML = '<a href="https://www.google.ba" target="_blank">google.ba</a>';
      secondElement.appendChild(a);
      //dodan google link u drugi element liste

      const host = list.lastElementChild.previousSibling;
      const shadow = host.createShadowRoot();
      const aSec = crEl("a");
      aSec.innerHTML = '<a href="https://www.facebook.com" target="_blank">facebook</a>';
      shadow.appendChild(aSec);
      //dodavanje facebooka u shadow

      const colEl = doc.getElementById("colorize");
      if (colEl.getAttribute("active") === "yes") {
        colEl.style.background = "red";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].addEventListener("click", colorizeInstruction);
        }
        //ako generisemo novu listu dok je colorize button aktivan

      }

      const remEl = doc.getElementById("remove");
      if (remEl.getAttribute("active") === "yes") {
        remEl.style.background = "red";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].addEventListener("click", removeInstruction);
        }
      }
      //u slucaju da generisemo novu listu dok je remove button aktivan

      const dropTarget = crEl("div");
      dropTarget.style.height = "300px";
      dropTarget.style.border = "1px solid black";
      dropTarget.innerText = "Drop here";
      doc.body.append(dropTarget);
      //generisanje drop target diva

      dropTarget.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });

      dropTarget.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (dropTarget.innerText == "Drop here")
          dropTarget.innerText = "";
        dropTarget.appendChild(object);

      });
    }
      break;

    case "colorize": {

      if (e.target.getAttribute("active") === ("yes")) {
        e.target.setAttribute("active", "no");
        e.target.style.background = "";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].removeEventListener("click", colorizeInstruction);
        }
      }
      //ako udjemo u colorize event sa aktivnim buttonom

      else {
        e.target.setAttribute("active", "yes");
        const remEl = doc.getElementById("remove");
        remEl.setAttribute("active", "no");
        remEl.style.background = "";
        e.target.style.background = "red";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].removeEventListener("click", removeInstruction);
          li[i].addEventListener("click", colorizeInstruction);
        }
      }
      //ako ne udjemo sa aktivnim buttonom, palimo ga... takodjer ovdje je i rjesenje da sve radi ako svičamo između remove i colorize buttona
    }

      break;

    case "remove": {
      if (e.target.getAttribute("active") === ("yes")) {
        e.target.setAttribute("active", "no");
        e.target.style.background = "";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].removeEventListener("click", removeInstruction);
        }
      }
      //kod je jako slican kao kod colorize buttona

      else {
        e.target.setAttribute("active", "yes");
        e.target.style.background = "red";
        const colEl = doc.getElementById("colorize");
        colEl.setAttribute("active", "no");
        colEl.style.background = "";
        const li = doc.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].removeEventListener("click", colorizeInstruction);
          li[i].addEventListener("click", removeInstruction);
        }
        //na isti fol kao i na colorize sve
      }
    }
  }
});
