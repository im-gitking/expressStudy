const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log('chating form post');
    var username = req.body.login;
    if (username != undefined) {
        console.log(username);
        res.send(
            `<script>
            var a = localStorage.setItem('username', '${username}');
            </script>
            <form method="POST" action="/"><input type="text" name="chat"><button type="submit">Send</button></form>`
        );
    } else {
        console.log(username);
        res.send(
            `<script>
            var a = localStorage.getItem('username');
            console.log(a);
            </script>
            <form method="POST" action="/"><input type="text" name="chat" value="a"><button type="submit">Send</button></form>`
        );
    }
});

router.get('/', (req, res, next) => {
    console.log('chating form get');
    res.send('<form method="POST" action="/"><input type="text" name="chat"><button type="submit">Send</button></form>');
});

module.exports = router;