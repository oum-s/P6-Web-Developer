const express = require('express');
// creation d'un routeur avec la méthode Router d'express
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


const theSaucesCtrl = require('../controllers/theSauces');
// appeler auth vant le gestionnaire de route pour qu'il puisse être utilisé
router.get('/', auth, theSaucesCtrl.getAllTheSauces);
router.post('/', auth, multer, theSaucesCtrl.createSauce);
router.get('/:id', auth, theSaucesCtrl.getOneSauce);
router.put('/:id', auth, multer, theSaucesCtrl.modifySauce);
router.delete('/:id', auth, theSaucesCtrl.deleteSauce);


module.exports = router;