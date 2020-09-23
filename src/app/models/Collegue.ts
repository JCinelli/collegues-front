class Collegue {
    matricule: string;
    nom: string;
    prenoms: string;
    email: string;
    dateDeNaissance: Date;
    photoUrl: String;

    constructor(matricule: string,
        nom: string,
        prenoms: string,
        email: string,
        dateDeNaissance: Date,
        photoUrl: String) {
        this.matricule = matricule
        this.nom = nom
        this.prenoms = prenoms
        this.email = email
        this.dateDeNaissance = dateDeNaissance
        this.photoUrl = photoUrl
    }

    formatDate() {
        return this.dateDeNaissance.toDateString
    }
}

export { Collegue }