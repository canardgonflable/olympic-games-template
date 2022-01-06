# Rendu du TP1 par Clément MAGNIN et Mohamed MEDACI

## Installation rapide

```shell
git clone https://github.com/canardgonflable/olympic-games-template.git
cd olympic-games-template
npm install
add url to MONGODB_URL in .env file
npm start
```
# TP 1 - Clement - Mohamed

## API REST

### Points de terminaison Sports

- [x] Endpoint Créer un sport : `POST /api/sports`
- [x] Endpoint Lister les sports : `GET /api/sports` (déjà fourni dans le squelette du projet)
- [x] Endpoint Consulter les athlètes d'un sport : `GET /api/sports/{sportId}/athletes`
- [x] Endpoint Ajouter un athlète dans un sport : `POST /api/sports/{sportId}/athletes/{athleteId}`

### Points de terminaison Athlètes

- [x] Endpoint Créer un athlète : `POST /api/athletes`
- [x] Endpoint Lister les athlètes : `GET /api/athletes`
- [x] Endpoint Consulter les sports d'un athlète : `GET /api/athletes/{athleteId}/sports`

### Points de terminaison Utilisateurs administrateurs (optionnel)

- [ ] Endpoint Créer un utilisateur : `POST /api/users`
- [ ] Endpoint Mettre à jour un utilisateur : `PUT /api/users/{userId}`
- [ ] Endpoint Lister les utilisateurs : `GET /api/users`
- [ ] Endpoint Consulter un utilisateur : `GET /api/users/{userId}`

## Interface Web

### Pages Web Sports/Athlètes

- [x] Page Web Lister les sports
- [x] Page Web Lister les athlètes
- [x] Page Web Créer un sport (formulaire)
- [x] Page Web Créer un athlète (formulaire)

### Autres pages Web Sports/Athlètes (optionnel)

- [x] Page Web ou fonctionnalité Supprimer un sport
- [x] Page Web ou fonctionnalité Supprimer un athlète
- [x] Page Web Modifier un sport (formulaire)
- [x] Page Web Modifier un athlète (formulaire)

### Pages Web Utilisateurs (optionnel)

- [x] Page Web Lister les utilisateurs
- [x] Page Web Créer un utilisateur (formulaire)
- [x] Page Web ou fonctionnalité Supprimer un utilisateur
- [x] Page Web Modifier un utilisateur (formulaire)

### Autres options avancées (optionnel)

- [ ] Authenfication sur les API REST
- [ ] Page Web de connexion avec login/mot de passe utilisateur

## Rendu attendu

- [ ] Code source sur un repo Git (sans le dossier node_modules 🙏)
- [ ] `README.md`
  - [ ] Instructions pour installer le projet (`git clone`, `npm install`, `npm start`, éventuels exemples de commande `curl`, ...)
  - [ ] Checklist des API et des fonctionnalités Web avec un statut des tests (OK ✅ ou KO ❌)
