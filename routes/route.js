const express = require('express');
const router = express.Router();

/*middlewares
*/

/*Controllers*/
const controllers = require('../controllers/controllers');


router.get('/contact',controllers.getContact)
router.post('/contact',controllers.newContact)

module.exports = router;