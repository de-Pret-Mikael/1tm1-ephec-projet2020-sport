"use strict"

/*
function showHint(str) {
	var selectedValue = selectBox.text[selectBox.selectedIndex].value;
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "Find?sportif=" + str, true);
    xmlhttp.send();
  }
}
*/
function creerTableau1(rep, id)function creerTableau1(rep, id)function creerTableau1(rep, id){
	let ligne1 = '';
	for (let a of rep) {
		ligne1 += '<option value=' + a.id + '>' + a.sportif + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne1;
}

function creerTableau2(rep, id){
	let ligne2 = '';
	for (let b of rep) {
		ligne2 += '<option value=' + b.sporttid + '>' + b.sportt + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne2;
}

function modifier(){
	var selectBox1 = document.getElementById("modif");
    var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
	var selectBox2 = document.getElementById("newModif");

    console.log(selectedValue1);

	let xhr = new XMLHttpRequest();
	// xhr.alterr;
	xhr.open('get', 'alterr?sportif=' + selectedValue1 + '&sportifNew=' + selectBox2.value, true);

	
    xhr.onload = // callback : fonction anonyme
        function(){
            var donnee = JSON.stringify(this.responseText);
			//console.log(this.responseText);
         } 
    xhr.send();

}

function modifier1(){
	var selectBox3 = document.getElementById("sport");
	var selectedValue3 = selectBox3.options[selectBox3.selectedIndex].value;
	var selectBox4 = document.getElementById("newSport");

	console.log(selectedValue3);

	let xhr = new XMLHttpRequest();
	// xhr.alterr;
	xhr.open('get', 'alterr?sportt=' + selectedValue3 + '&sportNew=' + selectBox4.value, true);


	xhr.onload = // callback : fonction anonyme
		function(){
			var donnee1 = JSON.stringify(this.responseText);
			//console.log(this.responseText);
		}
	xhr.send();

}

function valide() {
	let test = newModif.value;
	let okf = "";
	if(!test) {
		document.getElementById("ok").innerHTML = "Il n'y a eu aucun changement"
	}
	else{
		okf += "<span>" + "le joueur selectionné à bien été modifié en " + test + "</span>"
		document.getElementById("ok").innerHTML = okf
	}
}
