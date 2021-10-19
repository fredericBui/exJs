// En combinant un tableau et for, on peux parcourir et afficher toutes les valeurs d'un tableau

var tableau = ["Thomas", "Vincent", "Hélène"];

// tableau.length correspond à la taille du tableau
alert("La taille du tableau est de " + tableau.length);

for( i=0 ; i<tableau.length ; i++){
    console.log(tableau[i]);
}

// Défi : Ajouter une nouvelle personne dans le tableau