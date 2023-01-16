function delay() {
      setTimeout(() => {
            console.log("2 seconds have passed");
      }, 500);
}

let i = 0;
let interval = setInterval(() => {
      if (i === 100) {
            clearInterval(interval);
            return;
      }
      document.getElementById("inputheredude").value = names[i];
      document.getElementById("inputheredude").style.display = "block";
      document.getElementById("inputid").innerHTML = names[i];
      document.getElementById("inputheredude").setAttribute("value", "atithi");
      document.getElementById("buttonid").click();
      i++;
}, 1000);