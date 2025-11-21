// Données des élèves et notes
const eleves = [
    {
        id: 1,
        identifiant: "eleve001",
        mot_de_passe: "abc45gbd56r",
        nom: "BA",
        prenom: "Ramatoulaye",
        classe: "Terminale S2"
    },
    {
        id: 2,
        identifiant: "eleve002",
        mot_de_passe: "aqx452def2h",
        nom: "Diallo",
        prenom: "Ibrahima Sory",
        classe: "Terminale S2"
    },
    {
        id: 3,
        identifiant: "eleve003",
        mot_de_passe: "lfg658dcv2t",
        nom: "Diallo",
        prenom: "Saphiétou",
        classe: "Terminale S2"
    },
    {
        id: 4,
        identifiant: "eleve004",
        mot_de_passe: "sd52gtf630t",
        nom: "Sow",
        prenom: "Diouma",
        classe: "Terminale S2"
    },
    {
        id: 5,
        identifiant: "eleve005",
        mot_de_passe: "dcvf528gt9b",
        nom: "Sylla",
        prenom: "Alhassane",
        classe: "Terminale S2"
    },
];

const matieres = [
    { id: 1, nom: "Mathématiques" }
];

const notes = [
    // Notes pour eleve001 Ramatoulaye - Tests sur 5, autres sur 20
    { id: 1, eleve_id: 1, matiere_id: 1, type_evaluation: "test1", note: 3, coefficient: 1, date_evaluation: "2025-11-05", commentaire: "Bon travail ", note_sur: 5 },
    { id: 2, eleve_id: 1, matiere_id: 1, type_evaluation: "test2", note: 2, coefficient: 1, date_evaluation: "2025-11-07", commentaire: "Insuffisant", note_sur: 5 },
    { id: 3, eleve_id: 1, matiere_id: 1, type_evaluation: "test3", note: 3, coefficient: 1, date_evaluation: "2025-11-14", commentaire: "passable", note_sur: 5 },
    { id: 4, eleve_id: 1, matiere_id: 1, type_evaluation: "test4", note: 3, coefficient: 1, date_evaluation: "2025-11-17", commentaire: "passable", note_sur: 5 },
    //{ id: 3, eleve_id: 1, matiere_id: 1, type_evaluation: "compo", note: 14.0, coefficient: 3, date_evaluation: "2024-03-10", commentaire: "Bonne composition globale" },
    //{ id: 4, eleve_id: 1, matiere_id: 1, type_evaluation: "test", note: 16.0, coefficient: 1, date_evaluation: "2024-01-25", commentaire: "Excellent en algèbre" },
    //{ id: 5, eleve_id: 1, matiere_id: 1, type_evaluation: "devoir", note: 13.5, coefficient: 2, date_evaluation: "2024-02-15", commentaire: "Bon effort sur les probabilités" },

    // Notes pour eleve002 Ibrahima Sorry - Tests sur 5, autres sur 20
    { id: 100, eleve_id: 2, matiere_id: 1, type_evaluation: "test1", note: 3.5, coefficient: 1, date_evaluation: "2025-11-05", commentaire: "Bon travail", note_sur: 5 },
    { id: 101, eleve_id: 2, matiere_id: 1, type_evaluation: "test2", note: 4, coefficient: 1, date_evaluation: "2025-11-07", commentaire: "Bon travail", note_sur: 5 },
    { id: 102, eleve_id: 2, matiere_id: 1, type_evaluation: "test3", note: 3, coefficient: 1, date_evaluation: "2025-11-14", commentaire: "passable", note_sur: 5 },
    { id: 103, eleve_id: 2, matiere_id: 1, type_evaluation: "test4", note: 5, coefficient: 1, date_evaluation: "2025-11-17", commentaire: "Très bien", note_sur: 5 },
    //{ id: 8, eleve_id: 2, matiere_id: 1, type_evaluation: "test", note: 12.5, coefficient: 1, date_evaluation: "2024-01-20", commentaire: "Assez bien en algèbre" },
    //{ id: 9, eleve_id: 2, matiere_id: 1, type_evaluation: "compo", note: 14.0, coefficient: 3, date_evaluation: "2024-03-10", commentaire: "Bon travail sur l'ensemble" },
    //{ id: 10, eleve_id: 2, matiere_id: 1, type_evaluation: "devoir", note: 15.0, coefficient: 2, date_evaluation: "2024-02-15", commentaire: "Très bonne maîtrise des concepts" }

    // Notes pour eleve003 Saphiétou Diallo - Tests sur 5, autres sur 20
    { id: 200, eleve_id: 3, matiere_id: 1, type_evaluation: "test1", note: 2, coefficient: 1, date_evaluation: "2025-11-05", commentaire: "Insuffisant", note_sur: 5 },
    { id: 201, eleve_id: 3, matiere_id: 1, type_evaluation: "test2", note: 2, coefficient: 1, date_evaluation: "2025-11-07", commentaire: "Insuffisant", note_sur: 5 },
    { id: 202, eleve_id: 3, matiere_id: 1, type_evaluation: "test3", note: 5, coefficient: 1, date_evaluation: "2025-11-14", commentaire: "Très bien", note_sur: 5 },
    { id: 203, eleve_id: 3, matiere_id: 1, type_evaluation: "test3", note: 3, coefficient: 1, date_evaluation: "2025-11-17", commentaire: "Passable", note_sur: 5 },

    // Notes pour eleve005 Diouma Sow - Tests sur 5, autres sur 20
    { id: 300, eleve_id: 5, matiere_id: 1, type_evaluation: "test1", note: 1, coefficient: 1, date_evaluation: "2025-11-05", commentaire: "Insuffisant", note_sur: 5 },
    { id: 301, eleve_id: 5, matiere_id: 1, type_evaluation: "test2", note: 0, coefficient: 1, date_evaluation: "2025-11-07", commentaire: "Insuffisant", note_sur: 5 },
    { id: 302, eleve_id: 5, matiere_id: 1, type_evaluation: "test3", note: 2, coefficient: 1, date_evaluation: "2025-11-14", commentaire: "passable", note_sur: 5 },
    { id: 302, eleve_id: 5, matiere_id: 1, type_evaluation: "test4", note: 3, coefficient: 1, date_evaluation: "2025-11-17", commentaire: "passable", note_sur: 5 },

    // Notes pour eleve004 Alhassane Sylla- Tests sur 5, autres sur 20
    { id: 400, eleve_id: 4, matiere_id: 1, type_evaluation: "test1", note: 1.5, coefficient: 1, date_evaluation: "2025-11-05", commentaire: "Insuffisant", note_sur: 5 },
    { id: 401, eleve_id: 4, matiere_id: 1, type_evaluation: "test2", note: 2.5, coefficient: 1, date_evaluation: "2025-11-07", commentaire: "Passable", note_sur: 5 },
    { id: 402, eleve_id: 4, matiere_id: 1, type_evaluation: "test4", note: 3, coefficient: 1, date_evaluation: "2025-11-14", commentaire: "Passable", note_sur: 5 },
    { id: 403, eleve_id: 4, matiere_id: 1, type_evaluation: "test4", note: 3, coefficient: 1, date_evaluation: "2025-11-17", commentaire: "Passable", note_sur: 5 },
];