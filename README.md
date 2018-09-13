# Crash Test

## Database

Une fois qu'on a créé nos diagrammes de classes.
On peut facilement savoir quelles collections il faut créer.
Il y a :

- l'engin qui écrit, indexes, et lis les fichiers de DB.
- l'ODM qui fait interface entre notre language (node, php, etc...) et cet engin. Il nous permet de requeter notre base de données via des méthodes simples.

## mongoDB

Les schémas définissent la structure, les models sont la partie **ODM**, ils permettent de lier des méthodes à nos collections.

