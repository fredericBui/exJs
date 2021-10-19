// Dans javascript tout est objet. Précédement nous avions vu que les objets ont des propriétés.
// Les méthodes getElementsByTagName/getElementById/getElementsByClassName permettent de récupérer un sous objet du DOM
// Afficher un sous objet du DOM dans la console permet de voir les propriétés sur lesquelles on peux agir
// Ici nous avons choisi d'afficher le sous objet input que nous avons utilisé dans notre fichier index.html
// Nous aurions pu choisir d'afficher les propriétés du sous objet body, head, p, img et bien d'autres


console.log(document.getElementsByTagName("input"));

// Défi : Afficher les propriétés du sous objet div via un sélecteur unique de type Id ("conteneurVide")