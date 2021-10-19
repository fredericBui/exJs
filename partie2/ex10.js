// On peux également afficher chaque propriété d'un objet avec for

let utilisateur = {
    nom: 'Doe',
    prenom: 'John',
    description: 'Développeur web',
    age: 42
};

// Code fonctionnel à améliorer
for (let property in utilisateur) {
    console.log(`${property}: ${utilisateur[property]}`);
}
// Défi : Créer votre propre objet. Modifier le nom de l'objet et ses propriérés.