# Use this website to get comma seperated values with quotes: https://capitalizemytitle.com/tools/column-to-comma-separated-list/

For Example :
Atithi
Akshat
Mayur
Satwik

will be converted to
"Atithi","Akshat","Mayur","Satwik"

How to use:

Step 1: Open the console from browser

Step 2: create an array with the CSV values,

      var names = ["Atithi","Akshat","Mayur","Satwik"];
      Here we just copied the CSV data which we got from the website

Step 3: Run the script given below

      function delay() {
      setTimeout(() => {
            console.log("2 seconds have passed");
      }, 500);
      }

      let i = 0;
      let interval = setInterval(() => {
            if (names[i]==undefined) {
                  clearInterval(interval);
                  return;
            }
            document.getElementById("inputheredude").value = names[i];
            document.getElementById("inputheredude").style.display = "block";
            document.getElementById("inputid").innerHTML = names[i];
            let fu = document.getElementById("inputheredude")
            fu.value = names[i];
            document.getElementById("inputheredude").setAttribute("value", "atithi");
            document.getElementById("buttonid").click();
            i++;
      }, 1000);
