const express = require('express');

const routes = express.Router();
const users = [{
    id: 666,
    login: "admin",
    name: "admin",
    email: "admin@admin.com",
    password: "admin"
}];

routes.post('/login', (req, res) => {
    const { login, password,} = req.body;
    const user = users.find(user => user.login === login && user.password === password)
    if (user)
    {
        return res.status(200).json(user).send("logado com sucesso");
    }
    return res.status(401).json({message: "invalid credetials"})
})

module.exports = routes;