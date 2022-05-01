const express = require('express')
const connection = require('./database/connection')
const routes = express.Router()


routes.post('/', async (request, response) => {
    const {email, senha} = request.body
    console.log({email, senha})
    const user = await connection('users').where({
        'email': email,
        'senha': senha
      }).select('*').first()
    console.log(user)
    if(!user){
        return response.status(400).json({error: "No User with this email and password"})
    }else{
        return response.status(200).json({user})
    }
})

module.exports = routes