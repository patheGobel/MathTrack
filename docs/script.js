class PlateformeNotes {
    constructor() {
        this.eleveConnecte = null;
        this.notesFiltrees = [];
        this.filtreActuel = 'tous';
        this.init();
    }

    init() {
        this.bindEvents();
        this.verifierSession();
    }

    bindEvents() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.connexion();
            });
        }
    }

    connexion() {
        const identifiant = document.getElementById('identifiant').value;
        const motDePasse = document.getElementById('mot_de_passe').value;
        const messageDiv = document.getElementById('message');

        messageDiv.className = 'message';
        messageDiv.textContent = '';

        const eleve = eleves.find(e =>
            e.identifiant === identifiant && e.mot_de_passe === motDePasse
        );

        if (eleve) {
            this.eleveConnecte = eleve;
            this.sauvegarderSession();
            this.afficherDashboard();
        } else {
            messageDiv.textContent = 'Identifiant ou mot de passe incorrect';
            messageDiv.className = 'message error';
        }
    }

    sauvegarderSession() {
        localStorage.setItem('eleveConnecte', JSON.stringify(this.eleveConnecte));
    }

    verifierSession() {
        const eleveSauvegarde = localStorage.getItem('eleveConnecte');
        if (eleveSauvegarde) {
            this.eleveConnecte = JSON.parse(eleveSauvegarde);
            this.afficherDashboard();
        }
    }

    deconnexion() {
        this.eleveConnecte = null;
        localStorage.removeItem('eleveConnecte');
        this.afficherLogin();
    }

    afficherLogin() {
        document.querySelector('.login-container').style.display = 'block';
        document.querySelector('.dashboard').style.display = 'none';
    }

    afficherDashboard() {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'block';

        this.mettreAJourInfosUtilisateur();
        this.afficherStatistiques();
        this.afficherNotes();
    }

    mettreAJourInfosUtilisateur() {
        document.getElementById('userName').textContent =
            `${this.eleveConnecte.prenom} ${this.eleveConnecte.nom}`;
        document.getElementById('userClass').textContent = this.eleveConnecte.classe;
    }

    getNotesEleve() {
        return notes.filter(note => note.eleve_id === this.eleveConnecte.id);
    }

    calculerMoyenneTests() {
        const notesTests = this.getNotesEleve().filter(note => note.type_evaluation === 'test');

        if (notesTests.length === 0) return 0;

        let sommePonderee = 0;
        let totalCoefficients = 0;

        notesTests.forEach(note => {
            sommePonderee += note.note * note.coefficient;
            totalCoefficients += note.coefficient;
        });

        return totalCoefficients > 0 ? Math.round((sommePonderee / totalCoefficients) * 100) / 100 : 0;
    }

    calculerMoyenneDevoirs() {
        const notesDevoirs = this.getNotesEleve().filter(note => note.type_evaluation === 'devoir');

        if (notesDevoirs.length === 0) return 0;

        let sommePonderee = 0;
        let totalCoefficients = 0;

        notesDevoirs.forEach(note => {
            sommePonderee += note.note * note.coefficient;
            totalCoefficients += note.coefficient;
        });

        return totalCoefficients > 0 ? Math.round((sommePonderee / totalCoefficients) * 100) / 100 : 0;
    }

    calculerMoyenneCompo() {
        const notesCompo = this.getNotesEleve().filter(note => note.type_evaluation === 'compo');

        if (notesCompo.length === 0) return 0;

        let sommePonderee = 0;
        let totalCoefficients = 0;

        notesCompo.forEach(note => {
            sommePonderee += note.note * note.coefficient;
            totalCoefficients += note.coefficient;
        });

        return totalCoefficients > 0 ? Math.round((sommePonderee / totalCoefficients) * 100) / 100 : 0;
    }

    afficherStatistiques() {
        const moyenneTests = this.calculerMoyenneTests();
        const moyenneDevoirs = this.calculerMoyenneDevoirs();
        const moyenneCompo = this.calculerMoyenneCompo();

        document.getElementById('moyenneTests').textContent = `${moyenneTests}/5`;
        document.getElementById('moyenneDevoirs').textContent = `${moyenneDevoirs}/20`;
        document.getElementById('moyenneCompo').textContent = `${moyenneCompo}/20`;
    }

    filtrerNotes(type) {
        this.filtreActuel = type;
        this.afficherNotes();

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const boutons = document.querySelectorAll('.filter-btn');
        boutons.forEach(btn => {
            if (btn.textContent.includes(this.getTypeText(type))) {
                btn.classList.add('active');
            }
        });
    }

    getTypeText(type) {
        const types = {
            'tous': 'Toutes',
            'test': 'Tests',
            'devoir': 'Devoirs',
            'compo': 'Compositions'
        };
        return types[type];
    }

    afficherNotes() {
        let notesEleve = this.getNotesEleve();

        if (this.filtreActuel !== 'tous') {
            notesEleve = notesEleve.filter(note => note.type_evaluation === this.filtreActuel);
        }

        notesEleve.sort((a, b) => new Date(b.date_evaluation) - new Date(a.date_evaluation));

        const tbody = document.getElementById('notesTable');
        tbody.innerHTML = '';

        if (notesEleve.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Aucune note trouvée</td></tr>';
            return;
        }

        notesEleve.forEach(note => {
            const typeText = {
                'test': 'Test',
                'devoir': 'Devoir',
                'compo': 'Composition'
            }[note.type_evaluation];

            // Afficher la note avec son échelle réelle
            const affichageNote = note.note_sur === 5 ?
                `${note.note}/5` :
                `${note.note}/20`;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${this.formaterDate(note.date_evaluation)}</td>
                <td><strong>Mathématiques</strong></td>
                <td>
                    <span class="note-badge ${note.type_evaluation}">
                        ${typeText}
                    </span>
                </td>
                <td><strong>${affichageNote}</strong></td>
                <td>${note.coefficient}</td>
                <td>${note.commentaire || '-'}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    formaterDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR');
    }
}

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
    window.plateforme = new PlateformeNotes();
});

// Fonctions globales
function deconnexion() {
    window.plateforme.deconnexion();
}

function filtrerNotes(type) {
    window.plateforme.filtrerNotes(type);
}