function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const buttonClose = document.querySelector(".close");

//sélection des balises du formulaires
const prenom = document.getElementById('first');
const erreur_prenom = document.getElementById('erreur_prenom');
const nom = document.getElementById('last');
const erreur_nom = document.getElementById('erreur_nom');
const messagerie = document.getElementById('email');
const erreur_messagerie = document.getElementById('erreur_email');
const naissance = document.getElementById('birthdate');
const erreur_naissance = document.getElementById('erreur_anniversaire');
const nombre_tournois = document.getElementById('quantity');
const erreur_nbTournois = document.getElementById('erreur_nombre');
const villeNY = document.getElementById('location1');
const villeSF = document.getElementById('location2');
const villeSeattle = document.getElementById('location3');
const villeChicago = document.getElementById('location4');
const villeBoston = document.getElementById('location5');
const villePortland = document.getElementById('location6');
const erreur_ville = document.getElementById('erreur_ville');
const focuscgu = document.getElementById('checkbox1');
const erreur_cgu = document.getElementById('erreur_cgu');
const formulaire = document.getElementById('formulaire');
const envoi_formulaire = document.querySelector('.btn-submit');
const container_formulaire = document.querySelector('.modal-body');
const bouton_fermer = document.querySelector('.btn-fermer')


//Regex
const regexLettres = /^[a-zA-Z-\s]+$/;
const regexMessagerie = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexDateNaissance = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// listener bouton ouverture formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction pour faire apparaitre le formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// listener fermeture formulaire au clic sur la croix
buttonClose.addEventListener("click",closeModal);

//###1 TODO### : close Modal ### Fonction de fermeture formulaire au clic sur la croix
function closeModal() {
  modalbg.style.display = "none";

}
//Vérifications entrées formulaire

  formulaire.addEventListener("submit", soumettre);
  function soumettre(e){
  /* ###3### verification le prénom est vide ou à moins de 2 charactères ou contient des chiffres*/
  if (prenom.value ===0 || prenom.value.length <=2 || regexLettres.test(prenom.value) == false)
  {erreur_prenom.textContent="Le prénom doit comporter 2 charactères minimum sans accent et uniquement des lettres.";
  erreur_prenom.style.fontSize = "14px";
  erreur_prenom.style.color = "red";
}else{
  erreur_prenom.textContent=""; //pas d'erreur donc pas de message
}

/*verification le nom est vide ou à moins de 2 charactères ou contient des chiffres*/

  if (nom.value ===0 || nom.value.length <=2 || regexLettres.test(nom.value)==false)
  {erreur_nom.textContent="Le nom doit comporter 2 charactères minimum sans accent et uniquement des lettres."
  erreur_nom.style.fontSize = "14px";
  erreur_nom.style.color = "red";
}else{
  erreur_nom.textContent="";//pas d'erreur donc pas de message
};


//verification email valide

  if(regexMessagerie.test(messagerie.value)){// test regex mail ok
    erreur_messagerie.textContent ="";
    // Pas d'erreur
  }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_messagerie.textContent ="Veuillez entrer une adresse de messagerie valide";
    erreur_messagerie.style.fontSize = "14px";
    erreur_messagerie.style.color = "red";  
};


//verification date de naissance valide

  if(regexDateNaissance.test(naissance.value)){// test regex ok
    erreur_naissance.textContent ="";
    // Pas d'erreur
    }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_naissance.textContent ="Veuillez entrer une date de naissance valide";
    erreur_naissance.style.fontSize = "14px";
    erreur_naissance.style.color = "red";
};


//verification nombre de tournois compris entre 0 et 99

 if (nombre_tournois.value === ""){
  erreur_nbTournois.textContent="Vous devez entrer un nombre dans ce champ";
  erreur_nbTournois.style.fontSize = "14px";
  erreur_nbTournois.style.color = "red";
  }
  else
  {
    erreur_nbTournois.textContent=""
  };


//On teste si une des villes est coché sinon message d'erreur
if((villeNY.checked) || (villeSF.checked) || (villeSeattle.checked) ||
(villeChicago.checked) ||(villeBoston.checked) ||(villePortland.checked)){
  erreur_ville.textContent ="";
}else{
  erreur_ville.textContent="Vous devez sélectionner une ville";
  erreur_ville.style.fontSize = "14px";
  erreur_ville.style.color = "red";
}

//CGU cochée par défaut
focuscgu.checked === true

//vérification si cgu cochée
 if (focuscgu.checked)
 {
  erreur_cgu.textContent="";
 }
 else
 {
  erreur_cgu.textContent="Vous devez accepter les conditions d'utilisation";
  erreur_cgu.style.fontSize = "14px";
  erreur_cgu.style.color = "red"
  }
  e.preventDefault();//bloque l'envoi automatique du formulaire s'il n'est pas correctement rempli
}


// ###4### IF All&ALL Envoi formulaire au clic sur c'est parti si tout le formulaire est ok
envoi_formulaire.addEventListener("click", function() {
  if (prenom.value && nom.value && messagerie.value && naissance.value && nombre_tournois.value &&
    ((villeNY.checked) || (villeSF.checked) || (villeSeattle.checked) ||
(villeChicago.checked) ||(villeBoston.checked) ||(villePortland.checked)) && focuscgu.checked === true)

//Affichage de la page de remerciement
{container_formulaire.textContent = "Merci, votre formulaire nous a bien été transmis";
container_formulaire.style.fontFamily = "DM Sans";
container_formulaire.style.height = "700px";
container_formulaire.style.paddingTop = "300px";
container_formulaire.style.paddingLeft = "100px";
container_formulaire.style.paddingRight = "100px";
bouton_fermer.style.display = "block";
bouton_fermer.addEventListener("click", closeModal);
}
});