const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('log in');
    res.send(
        `<form method="POST" action="/"><input type="text" name="login"><button type="submit">Log In</button></form>`
    );
});

module.exports = router;