const express = require('express');
// on appelle la méthode express via app
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const theSaucesRoutes = require('./routes/theSauces');
const path = require('path');

mongoose.connect('mongodb+srv://oumi:piiquante@cluster0.bud9uaa.mongodb.net/?retryWrites=true&w=majority',

  { useNewUrlParser: true,

    useUnifiedTopology: true })

  .then(() =>console.log('Connexion à MongoDB réussie !'))

  .catch(() =>console.log('Connexion à MongoDB échouée !'));

  app.use(cors()) 
// on ajoute un middleware qui s'applique à toutes les routes envoyés à notre serveur donc on met aucun lien
app.use((req, res, next) => {
  // on ajoute des header sur l'objet réponse
  // ici l'étoile ça veut dire tout le monde
  res.setHeader('Access-Control-Allow-Origin', '*');
  // on donne l'autorisation d'utiliser certaines en tête et autres
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

  next();

});

// ce middleware intercepte toutes les requêtes contenant du json et nous met à disposition ce contenue dans req.body
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use('/api/theSauces', theSaucesRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;