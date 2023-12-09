const expense = require('express');

const insertController = require('../controllers/submit');
const editController = require('../controllers/edit');
const updateController = require('../controllers/update');
const fetchController = require('../controllers/fetch');

const router = expense.Router();

router.post('/submit', insertController.insertData);
router.post('/edit', editController.editData);
router.post('/update/:id', updateController.updateData);
router.post('/fetch', fetchController.fetchData);

module.exports = router;