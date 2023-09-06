const { Router } = require('express');
const express = require('express');
const route = express.Router();
const User = require('./models/user');

route.post('/createAccount', (request, response) => {
    const {firstName,lastName,email,password} = request.body;
    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
    .then(account => {
        return response.status(500).json({message: account});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
})

route.get('/getUsers', (request, response) => {
    User.findAll()
    .then(users => {
        return response.status(500).json({message: users});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
})

route.get('/findUser/:id', (request, response) => {
    const id = request.params.id;
    User.findByPk(id)
    .then(user => {
        return response.status(500).json({message: user});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
})

route.get('/findUserByValue/:id', (request, response) => {
    const id = request.params.id;
    User.findAll({where: {email: id}})
    .then(user => {
        return response.status(500).json({message: user});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
})

route.put('/updateAccount/:id', (request, response) => {
    const id = request.params.id;
    const {firstName,lastName,email,password} = request.body;
    User.findByPk(id)
    .then(account => {
        account.firstName = firstName;
        account.lastName = lastName;
        account.email = email;
        return account.save();
    })
    .then(results => {
        return response.status(500).json({message: results});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
})


route.delete('/deleteAccount/:id', (request, response) => {
    const id = request.params.id;
    User.findByPk(id)
    .then(account => {
        return account.destroy();
    })
    .then(results => {
        return response.status(500).json({message: results});
    })
    .catch(err => {
        return response.status(500).json({message: err});
    })
});

module.exports = route;