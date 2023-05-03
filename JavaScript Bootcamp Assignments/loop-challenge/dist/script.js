let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amjad", "Samah", "Ameer", "Omar", "Othman", "Amani", "Samia"];


for (let i = 0; i < myAdmins.length; i++) {

  if (i ===  myAdmins.indexOf("Stop")) {

    document.write(`<div>We Have ${i} Admins</div>`);

    document.write("<hr>");

    for (let i = 0; i < myAdmins.indexOf("Stop"); i++){

      document.write("<div>");

      document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);

      document.write("<h3>Team Members :-</h3>");

      counter = 0 ;

      for (let j = 0; j < myEmployees.length; j++) {

        if (myAdmins[i][0] ===  myEmployees[j][0]) {

          counter += 1;

          document.write(`<p>${counter} - ${myEmployees[j]}</p>`);

        }

      }

      document.write("</div>");

      document.write("<hr>");

    }

  }

}