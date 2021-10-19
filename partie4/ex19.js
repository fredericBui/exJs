// On peux réaliser des actions en fonction de ce que fait l'utilisateur
// Cela s'apelle des évènements, ici l'évènement est click

window.addEventListener("click",maFonction,false);

function maFonction(){
    alert("Vous avez cliqué sur la souris !");
}

// Retrouvez la liste des évènements possible sur https://www.w3schools.com/jsref/dom_obj_event.asp
// Défi : Tester l'évènement keypress et afficher le message Vous avez appuyer sur une touche du clavier