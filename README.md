# 18228622_Mouzoun-Leandre_Gl
Projet laravel+react

# Projet Gestion Patients

Application web complète pour la gestion et le suivi médical des patients, composée d’un frontend React et d’un backend Laravel avec une base de données PostgreSQL.

---

## Technologies utilisées

- **Frontend** : React, Vite, React Router, jsPDF  
- **Backend** : Laravel (PHP)  
- **Base de données** : PostgreSQL (`mrc_db`)  
- **Gestion de version** : Git + GitHub  
- **Déploiement** : Render (frontend) + Hébergement backend et base PostgreSQL séparés  

---

## Fonctionnalités principales

### Frontend (React)

- Liste des patients affichée sur le dashboard  
- Navigation vers la page détail de chaque patient  
- Formulaire d’ajout de consultation (créatinine, tension artérielle, changement de poids)  
- Génération et téléchargement de dossiers PDF pour chaque patient grâce à jsPDF  

### Backend (Laravel)

- API REST pour gérer les patients et consultations  
- Connexion à la base PostgreSQL `mrc_db`  
- Contrôleurs : PatientController, ConsultationController, etc.  
- Validation et stockage des données médicales  

### Base de données (PostgreSQL)

- Base `mrc_db` avec 2 tables principales :  
  - `patients` : stocke les informations patient  
  - `consultations` : stocke les consultations liées aux patients  

---

## Installation et configuration

### Frontend

```bash
cd frontend
npm install
npm run dev       # pour lancer en local
npm run build     # pour générer la version production
