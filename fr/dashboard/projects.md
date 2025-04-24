---
pageClass: project-doc doc
---
# Projets

Les projets dans FF Serli sont des conteneurs pour vos drapeaux de fonctionnalités.
Ils représentent des applications, des services ou des environnements dans lesquels les drapeaux sont définis, regroupés et gérés.

Chaque projet est isolé et vous permet de :

- Créer et organiser des drapeaux de fonctionnalités
- Gérer les drapeaux par environnement (développement, staging, production)


## Créer un projet

Pour créer un projet, cliquez sur le bouton **« Créer un projet »** en haut de la barre latérale.
Il vous sera demandé de choisir un **provider** (fournisseur) :

<div class="center">
  <img src="/assets/dashboard/project-choose-provider.png" alt="Organisation" />
</div>

### 1. Fournisseur GitHub

<div class="center">
  <img src="/assets/dashboard/project-provider-github.png" alt="Organisation" />
</div>

Si vous choisissez **GitHub** :

- Sélectionnez un dépôt GitHub
- Choisissez un environnement (par exemple : `dev`, `staging`, `prod`)
- Le projet est créé. Vous pouvez ensuite cliquer sur le bouton **« Importer les drapeaux »**

FF Serli cherchera un fichier `flags.json` à la racine du dépôt.
S'il existe, vos drapeaux seront automatiquement importés.

Vous pouvez également créer vos drapeaux manuellement dans le dashboard.

<div class="center">
  <img src="/assets/dashboard/project-import-flag-github.png" alt="Organisation" />
</div>

### 2. Fournisseur Serli

<div class="center">
  <img src="/assets/dashboard/project-provider-serli.png" alt="Organisation" />
</div>

Si vous choisissez **Serli** :

- Saisissez un nom de projet
- Choisissez un environnement
- Cliquez sur **Créer**

Vous pouvez ensuite :

- Importer un fichier de drapeaux local
- Ou créer vos drapeaux directement depuis le dashboard

<div class="center">
  <img src="/assets/dashboard/project-import-flag-serli.png" alt="Organisation" />
</div>


## Modifier un projet

Vous pouvez renommer un projet en cliquant sur son nom dans la barre latérale et en le modifiant.

1. Faites un clic droit sur le projet
2. Cliquez sur **« Paramètres »**
3. Modifiez les champs souhaités
4. Enregistrez vos modifications


## Supprimer un projet

Pour supprimer un projet :

1. Faites un clic droit sur le projet dans la barre latérale
2. Cliquez sur **« Supprimer »**
3. Confirmez la suppression en entrant le nom du projet

::: danger
La suppression d’un projet entraîne la suppression de tous les drapeaux associés. Cette action est irréversible.
:::

<div class="center">
  <img src="/assets/dashboard/project-delete.png" alt="Organisation" />
</div>


## Avoir l'identifiant du projet
Vous pouvez trouver l'identifiant du projet dans le dashboard en cliquant sur le projet.
Dans la page du projet en haut à droite, vous trouverez l'identifiant du projet et pourrez le copier.

<div class="center">
  <img src="/assets/dashboard/project-id.png" alt="project id" />
</div>
