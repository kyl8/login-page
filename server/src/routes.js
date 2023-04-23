const express = require('express');
const moment = require('./libs/moment');

const routes = express.Router();
const users = [{
    id: 666,
    login: "admin",
    name: "admin",
    email: "admin@admin.com",
    password: "admin"
},
{
    id: 616,
    login: "teste",
    name: "teste",
    email: "teste@admin.com",
    password: "teste"
}
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

routes.post('/login', (req, res) => {
    const { login, password} = req.body;
    const user = users.find(user => user.login === login && user.password === password)
    if (user)
    {
        return res.status(200).json(user).send("logado com sucesso");
    }
    return res.status(401).json({message: "invalid credentials"})
})

//sem verificação de duplicidade de id, login e email ainda
/* só aciona o modal pra dizer que foi registrado, o armazenamento de login para iniciar sessão ainda não foi
implementado, apenas contas que forem adicionadas manualmente no array users[] podem "iniciar" sessão*/
//adicionado a lib moment.js pra futuras validações de data

routes.post('/register', (req, res) => {
    const { login, password, confirmPassword, email, date } = req.body;
    const newUser = [{
        id: getRandomInt(2, 99999),
        login: login,
        password: password,
        email: email,
        date: date
    }]

    if (password == confirmPassword) {
        users.push(newUser)
        return res.status(200).json(newUser).send("registrado com sucesso")
    }
    else {
        return res.status(401).json({message: "password is not the same as confirm password"})
    }
    
})

module.exports = routes;