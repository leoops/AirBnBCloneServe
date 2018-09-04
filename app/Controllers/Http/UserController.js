'use strict'

const User = use("App/Models/User");

class UserController {
    async create({ request }){
        
        // busca de parametro apartir do name
        const data = request.only(['username', 'email', 'password']);
        // Creacao do objeto
        const user = await User.create(data);

        return user
    }
}

module.exports = UserController
