# Jeux de dés 

Je suis David Le Gouellec actuellement en formation chez STUDI depuis Avril 2022 en 
tant que Développeur Web et Web mobile Fullstack. Dans ce readme, je vous propose les explications et documentations pour cet examen blanc :
**Dynamiser vos sites web avec Javascript**  
[Lien du site en ligne](https://ddlgc.github.io/Jeux-de-des/)  
[Lien du sujet](./images/GDWFSDVSWEBAJAVAEXAIII1A-dynamiser-java.pdf)

## Modalités / Restrictions : 
- Votre code sera structuré
- Le jeu devra être fonctionnel
- Les ressources seront disponibles dans un dossier images
- La font sera Lato (google font) : specimen/Lato
- Le Framework CSS de votre choix
- L'application devra ressembler a peu prés a ça  
![Représentation du rendu](./images/Capture%20d’écran.png)

## Règles :  
Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.

## Charte graphique

### Couleur

| **Color**             | **Hex**                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Crimson | ![#dc143c](https://via.placeholder.com/10/dc143c?text=+) #dc143c |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Grey | ![#ddd](https://via.placeholder.com/10/ddd?text=+) #ddd |  

### Font  
[Google Font Lato](https://fonts.google.com/?query=lato)  

### Icones / Images / Sujet
[Dossier images/icones](./images/)

## Links

### Documentation   
[Inspiration Confetti](https://www.codehim.com/animation-effects/javascript-confetti-explosion-effect/)  
[Doc Bootstrap](https://getbootstrap.com/)  

[![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)](https://trello.com/b/cNpyGhNE/tache)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DdLgc/Jeux-de-des)
[![Linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-le-gouellec-551322243/)  

![GitHub deployments](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)

<!-- [![Portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/) -->

## Axe d'amélioration pour le projet 

-> Petite animation au click 'Roll dice' et non au début du jeu  
-> Ajouter un onglet déroulant pour afficher les régles  
-> La pop-up affiche le nom du prompt et pas joueur 1 ou 2  
-> Animation en three.js [Three.js](https://threejs-journey.com/)


<!-- https://codepen.io/ocxigin/pen/qBQxmLW  inspi bouton et ajouter la biblioteque d'icone qui va avec  
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js">
</script>

-->