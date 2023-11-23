const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log('chatting form post');

    const username = req.body.login;
    if (username != undefined) {
        // console.log(username);
        const chatHistory = fs.readFileSync('./routes/message.txt', 'utf8');

        res.send(
            `<script>
            var a = localStorage.setItem('username', '${username}');
            </script>
            <div id="chat-history">${chatHistory}</div>
            <form method="POST" action="/"><input type="text" name="chat"><input type="hidden" name="hidden" value="${username}"><button type="submit">Send</button></form>`
        );
    } else {
        var chatText = req.body.chat;
        var hiddenUser = req.body.hidden;

        // console.log(chatText);
        // console.log(hiddenUser);

        fs.appendFileSync('./routes/message.txt', `${hiddenUser} : ${chatText} `);
        const chatHistory = fs.readFileSync('./routes/message.txt', 'utf8');


        res.send(
            `<div id="chat-history">${chatHistory}</div>
            <form method="POST" action="/"><input type="text" name="chat"><button type="submit">Send</button></form>
            
            <script>
            var a = localStorage.getItem('username');
            console.log(a);
            const form = document.querySelector('form');
            console.log(form);
            const button = document.querySelector('button');
            const hiddenELm = document.createElement('input');
            hiddenELm.type = 'hidden';
            hiddenELm.name = 'hidden';
            hiddenELm.value = a;
            form.insertBefore(hiddenELm, button);
            </script>`
        );
    }
});

router.get('/', (req, res, next) => {
    // console.log('chatting form get');
    const chatHistory = fs.readFileSync('./routes/message.txt', 'utf8');

    res.send(`<div id="chat-history">${chatHistory}</div><form method="POST" action="/"><input type="text" name="chat"><button type="submit">Send</button></form>
    <script>
    var a = localStorage.getItem('username');
    console.log(a);
    const form = document.querySelector('form');
    console.log(form);
    const button = document.querySelector('button');
    const hiddenELm = document.createElement('input');
    hiddenELm.type = 'hidden';
    hiddenELm.name = 'hidden';
    hiddenELm.value = a;
    form.insertBefore(hiddenELm, button);
    </script>`);
});

module.exports = router;