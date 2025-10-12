# Guide de Contribution

Merci de votre intérêt pour contribuer à Clone-Eleven-Labs ! 🎉

## Comment contribuer

### Signaler un bug

Si vous trouvez un bug, veuillez ouvrir une issue avec :
- Description détaillée du problème
- Étapes pour reproduire
- Comportement attendu vs comportement actuel
- Captures d'écran si applicable
- Votre environnement (OS, versions Python/Node)

### Proposer une fonctionnalité

Pour proposer une nouvelle fonctionnalité :
1. Vérifiez qu'elle n'existe pas déjà dans les issues
2. Ouvrez une issue avec le tag "enhancement"
3. Décrivez clairement la fonctionnalité et son utilité

### Soumettre une Pull Request

1. **Fork** le projet
2. **Créez une branche** depuis `main`
   ```bash
   git checkout -b feature/ma-super-feature
   ```
3. **Commitez** vos changements
   ```bash
   git commit -m "Add: ma super feature"
   ```
4. **Testez** vos modifications
5. **Push** sur votre fork
   ```bash
   git push origin feature/ma-super-feature
   ```
6. Ouvrez une **Pull Request**

## Standards de code

### Python (Backend)
- Suivre PEP 8
- Utiliser des type hints
- Documenter les fonctions avec docstrings
- Écrire des tests unitaires

### TypeScript (Frontend)
- Utiliser TypeScript strict mode
- Suivre les conventions React
- Utiliser des noms de variables explicites
- Commenter le code complexe

## Style de commit

Utilisez des messages de commit clairs :
- `Add: nouvelle fonctionnalité`
- `Fix: correction de bug`
- `Update: mise à jour de code existant`
- `Docs: modification de documentation`
- `Refactor: refactoring sans changement de comportement`

## Tests

Avant de soumettre une PR :
- Testez localement le backend et le frontend
- Assurez-vous qu'aucune régression n'a été introduite
- Ajoutez des tests si vous ajoutez du code

## Questions

N'hésitez pas à ouvrir une issue pour toute question !
