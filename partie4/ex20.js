// Afficher tous les sous objets d'un même type dans la console
for(i=0; i<document.getElementsByTagName("p").length;i++){
    console.log(document.getElementsByTagName("p")[i]);
}


// Parcourir les propriétés d'un sous objet
sousObjetP = document.getElementById("paragraphe");
console.log(sousObjetP);


for (let property in sousObjetP) {
    console.log(`${property}: ${sousObjetP[property]}`);
}

