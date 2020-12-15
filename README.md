- Créez un nouveau service, nommé UserService. 
- Ce service doit aller récupérer les données du fichier user.json contenu dans le dossier assets. 
- Un utilisateur doit avoir les propriétés suivantes: 

- name:string
- age :number
- address : string
- sex : string
- connected: boolean

- Le contenu du fichier user.json doit refléter cette structure. 
- Bien sur, il vous faudra créer une classe (entité) de type User, afin d'avoir un développement rigoureux. 
- Les données gérées par notre UserService devront être visible dans un composant nommé: AccountComponent. 

- Ce composant devra être accessible via la route: "/me". 
- Si votre utilisateur est connecté, alors on affiche l'ensemble des informations, sinon on affiche un message 
disant que l'utilisateur est déconnecté. 

