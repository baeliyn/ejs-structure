const router = require('express').Router();
const blogController = require('../controllers/blogController')

router.get('/', blogController.tumMakaleleriGetir)
//router.get('/blog', blogController.tumMakaleleriGetir)

module.exports = router;