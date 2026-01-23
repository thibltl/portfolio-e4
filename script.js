const data = {
    c11: `
        <h3>1.1 Patrimoine informatique</h3>
        <p>Gestion des dépôts Git, structure Symfony, documentation et versioning.</p>
        <ul>
            <li>Procédure d’installation</li>
            <li>Organisation des branches</li>
            <li>Documentation technique</li>
        </ul>
    `,
    c12: `
        <h3>1.2 Incidents & assistance</h3>
        <p>Traitement de bugs applicatifs :</p>
        <ul>
            <li>Analyse du problème</li>
            <li>Correction du code</li>
            <li>Tests de validation</li>
            <li>Documentation par bug</li>
        </ul>
    `,
    c13: `
        <h3>1.3 Présence en ligne</h3>
        <p>Amélioration d’interfaces et fonctionnalités web.</p>
    `,
    c14: `
        <h3>1.4 Gestion de projet</h3>
        <p>Travail en équipe avec suivi des tâches et organisation projet.</p>
    `,
    c15: `
        <h3>1.5 Déploiement de service</h3>
        <p>Mise à disposition de l’application avec documentation utilisateur.</p>
    `,
    c16: `
        <h3>1.6 Développement professionnel</h3>
        <p>Veille technologique, auto-formation Symfony et Git.</p>
    `
};

function openModal(id) {
    document.getElementById('modal-text').innerHTML = data[id];
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
