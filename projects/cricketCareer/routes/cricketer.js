const expense = require('express');

const insertController = require('../controllers/submit');
// const editController = require('../controllers/delete');
// const updateController = require('../controllers/delete');
// const fetchController = require('../controllers/delete');

const router = expense.Router();

router.delete('/submit', insertController.insertData);
// router.delete('/edit', editController.deleteData);
// router.delete('/update/:id', updateController.deleteData);
// router.delete('/fetch/:name', fetchController.deleteData);

module.exports = router;