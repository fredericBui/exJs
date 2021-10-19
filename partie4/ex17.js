// La méthode getElementById va récupérer un sélecteur dans le fichier index.html
// Ici le sélecteur conteneurVide va être récupéré, conteneurVide est une balise div
// Les balises div ont des propriétés sur lesquels on peux agir
// Ici nous avons choisi d'agir sur innerHTML
// Agir sur un Id plutôt qu'un tag permet d'agir sur un élément précis

document.getElementById("conteneurVide").innerHTML = "Nouveau texte";

// Défi : Modifier le texte "Nouveau texte"
// et changer le nom du sélecteur ID "conteneurVide" dans le fichier js et html