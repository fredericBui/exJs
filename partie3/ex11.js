// A l'instar des variables, une fonction permet de stocker des instructions et de les réutiliser plus tard

var age = 0;

function affichageAgeUtilisateur() {
    alert("Bienvenu !");
    age = prompt("Quel âge avez vous ?");
    alert("Vous avez " + age);
}

affichageAgeUtilisateur();

// Défi : Réaliser votre propre fonction. Changer le nom de la fonction et son contenu.