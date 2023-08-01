//Récupération des différentes zones de texte
let errorMessage = document.getElementById("error-message");
let firstName = document.getElementById("first-name_box");
let lastName = document.getElementById("last-name_box");
let email = document.getElementById("email_box");
let object = document.getElementById("object_box");
let comment = document.getElementById("comments");

//Fonction qui ajoute les commentaires des utilisateurs sur la page
function error(event) {
    //Enlève le rechargement par défaut
    event.preventDefault();

    //Boucle qui teste si les zones de texte sont vides ou non, puis affiche ou non le message d'erreur
    if (firstName.value == "" || lastName.value == "" || object.value == "" || comment.value == "" || email.value == "") {
        errorMessage.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
    }
    // Hide alert after 3 seconds
    setTimeout(function () {
        errorMessage.style.display = "none";
    }, 3000);
}


//Fonction qui permet de supprimer les valeurs des zones de texte
function submitValue() {

    //On modifie les valeurs des champs de texte pour les rendre vide
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    object.value = "";
    comment.value = "";
}

let button = document.getElementById("submit");
//La fonction error s'activera au clic sur le bouton "Envoyer"
button.addEventListener("click", error);
//La fonction submitValue s'activera au clic sur le bouton "Envoyer"
button.addEventListener("click", submitValue);

//Fonction qui fait apparaît un popup de la photo de profil
function popup() {
    window.open("Pdp.html", "popup", "toolbar=no, status=yes, scrollbars=yes, resizable=yes, width=600, height=650");
}



//Fonction qui rend visible ou non le modal du CV
let modalContainerCV = document.querySelector(".modal-container-CV");
let modalTriggersCV = document.querySelectorAll(".modal-trigger-CV");

modalTriggersCV.forEach(trigger => trigger.addEventListener("click", toggleModalCV));

function toggleModalCV() {
    modalContainerCV.classList.toggle("active");
}


//Fonction qui rend visible ou non le modal du cahier des charges
let modalContainerSpecifications = document.querySelector(".modal-container-specifications");
let modalTriggersSpecifications = document.querySelectorAll(".modal-trigger-specifications");

modalTriggersSpecifications.forEach(trigger => trigger.addEventListener("click", toggleModalSpecifications));

function toggleModalSpecifications() {
    modalContainerSpecifications.classList.toggle("active");
}

//Fonction qui rend visible ou non le modal de l'espace de commentaires
let modalContainerCommentsSpace = document.querySelector(".modal-container-comments-space");
let modalTriggersCommentsSpace = document.querySelectorAll(".modal-trigger-comments-space");

modalTriggersCommentsSpace.forEach(trigger => trigger.addEventListener("click", toggleModalCommentsSpace));

function toggleModalCommentsSpace() {
    modalContainerCommentsSpace.classList.toggle("active");
}


let prensentationLink = document.getElementById("presentation_link");
let creationLink = document.getElementById("creation_link");
let contactLink = document.getElementById("contact_link");

function activeLinkPresentation() {
    if (prensentationLink.classList.toggle("active")) {
        prensentationLink.style.textDecoration = "underline";
    }
    else {
        prensentationLink.style.textDecoration = "none";
    }
}

function activeLinkCreation() {
    if (creationLink.classList.toggle("active")) {
        creationLink.style.textDecoration = "underline";
    }
    else {
        creationLink.style.textDecoration = "none";
    }
}

function activeLinkContact() {
    if (contactLink.classList.toggle("active")) {
        contactLink.style.textDecoration = "underline";
    }
    else {
        contactLink.style.textDecoration = "none";
    }

}

