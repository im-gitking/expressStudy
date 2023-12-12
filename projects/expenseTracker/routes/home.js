const expense = require('express');

const fetachController = require('../controllers/fetch');
const insertController = require('../controllers/insert');

const router = expense.Router();

router.get('/', fetachController.fetchData);
router.post('/', insertController.insertData);

module.exports = router;