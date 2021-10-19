// Ce code est le même que le précédent. Sauf que nous demandons à l'utilisateur d'entrer une valeur.

var chiffre = prompt();

if (42==chiffre){
    alert("Le chiffre est égal à 42 !");
}else{
    alert("Le chiffre n'est pas 42. C'est " + chiffre);
}

// Défi : Entrer des valeurs dans la boîte de dialogue qui s'affiche. Modifier la valeur 42 dans le if.