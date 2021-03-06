"use strict"
//Projet Database
//------------------
// 1TM1 / De Weerd / Nicolas / HE201431

function initPage(){
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'joueur', true); // préparer
	xhr.onload = // callback : fonction anonyme
	function(){
		creerTableau(JSON.parse(this.responseText), 'selection');
		creerTableau1(JSON.parse(this.responseText), 'modifN');
		creerTableau3(JSON.parse(this.responseText), 'modifP');
	};
	xhr.send() // envoyer
}

function creerTableau(rep, id){
	let ligne = '';
	for (let e of rep) {
		ligne += '<option value=' + e.id + '>' + e.sportif + ' ' + e.sportifPrenom + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne;
}

function trouveSportif(){
	var selectBox = document.getElementById("selection");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	console.log(selectedValue);
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'getTrouveSportif?sportif=' + selectedValue, true); // préparer
	xhr.onload = // callback : fonction anonyme
	function(){
		tableau(JSON.parse(this.responseText));
	}
	xhr.send();
}

function tableau(data){
	let cellule = '';
	for (let a of data){
		cellule += '<tr><td>' + a.tournoi + '</td><td>' + a.sport + '</td><td>' + a.annee + '</td> \n';
	}
	document.getElementById('recap').innerHTML = cellule;
}
