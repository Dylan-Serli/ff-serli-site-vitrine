---
pageClass: flag-doc doc
---
# Feature Flags

Les feature flags sont au cœur de FF Serli.
Ils vous permettent de **contrôler le comportement de votre application en temps réel**, sans redéploiement.

Les flags peuvent être évalués via nos [SDKs](/sdk/index) ou l’[API](/api) et respectent entièrement la spécification [OpenFeature](https://openfeature.dev).


## Qu’est-ce qu’un Feature Flag ?

Un feature flag est un **interrupteur nommé** qui détermine si une fonctionnalité ou un comportement doit être actif ou non dans votre application.

Il permet de :

- Déployer des fonctionnalités progressivement
- Réaliser des tests A/B
- Désactiver instantanément une fonctionnalité risquée
- Gérer des configurations spécifiques à un environnement


## Types de Flags

FF Serli prend en charge les types suivants, conformément à la spécification OpenFeature :

| Type     | Description                          | Exemples                           |
|----------|--------------------------------------|------------------------------------|
| Boolean  | Vrai ou faux                         | `true`, `false`                    |
| String   | Valeur textuelle                     | `"beta"`, `"red-theme"`            |
| Number   | Entier ou nombre décimal             | `1`, `0.5`, `42`                   |
| Object   | Paires clé-valeur structurées (JSON) | `{ "level": "pro", "tier": 3 }`    |


## Voir les Flags

Vous pouvez voir tous les flags de votre projet en sélectionnant le projet dans le tableau de bord.
Une liste s’affiche avec le type et la valeur sélectionnée de chaque flag.

<div class="center">
  <img src="/assets/dashboard/flag-dashboard.png" />
</div>


## Créer un Flag

Pour créer un flag :

1. Allez dans un **projet** depuis le tableau de bord
2. Cliquez sur **“Ajouter un Flag”**
3. Remplissez le formulaire :
   - **Nom** : identifiant unique
   - **Type** : booléen, chaîne, nombre ou objet
   - **Variations** : différentes valeurs possibles
   - **Variation par défaut** : la valeur utilisée par défaut
4. Cliquez sur **“Créer”**

<div class="center">
  <img src="/assets/dashboard/flag-create.png" alt="Créer un flag" />
</div>

::: tip
Vous pouvez ajouter plusieurs variations à un flag en cliquant sur le bouton `+`.
Vous pouvez ajouter des variations à tous les types de flags sauf les flags booléens.
:::


## Modifier un Flag

Vous pouvez modifier la valeur sélectionnée ou mettre à jour les différentes variations de votre flag.

1. Cliquez sur l’**icône de modification** du flag dans la liste à droite
<div class="center">
  <img src="/assets/dashboard/flag-list.png" alt="Modifier un flag" />
</div>

2. Modifiez :
   - La valeur par défaut en sélectionnant une variation dans la liste déroulante
   - Les différentes valeurs du flag
   - Ajoutez de nouvelles variations
   - Supprimez des variations

Les modifications sont **sauvegardées instantanément** et propagées à tous les SDKs.

<div class="center">
  <img src="/assets/dashboard/flag-update.png" alt="Modifier un flag" />
</div>


## Supprimer un Flag

Pour supprimer un flag, cliquez sur l’icône de poubelle à droite du flag dans la liste.


## Vue Avancée

Cliquez sur **“Vue Avancée”** pour accéder à l’édition directe en JSON.
Vous pouvez y modifier entièrement le contenu de votre flag dans un format brut.

Lorsque vous cliquez sur **Enregistrer**, le fichier sera mis à jour si le JSON est valide et respecte toujours la norme OpenFeature.

::: info
Si vous quittez la vue avancée sans enregistrer, la dernière version valide sera conservée.
:::

<div class="center">
  <img src="/assets/dashboard/flag-advanced-view.png" alt="Vue avancée des flags" />
</div>
