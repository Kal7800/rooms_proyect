<<<<<<< HEAD
const {models} = require('./../libs/sequelize');
const bcrypt = require('bcrypt');
const idRandom = require('./round.pass');

class userService{
    constructor(){}

    async create(data){
      const {name, surname,email, password} = data
      const idUser = idRandom(2);
      const hash = await bcrypt.hash(password, 8);
        const newUser = await models.User.create({
          userId: idUser,
          name: name,
          surname: surname,
          email:email,
          password: hash
        });
        delete newUser.dataValues.password;
        return newUser
    };

    async find(){
     const user = await models.User.findAll();
     return user;
    };

    async findOne(id){
      const user = await models.User.findByPk(id,{
        include: ['rooms_for_user']
      });
      delete user.dataValues.password;
      return user;
    }

    async findEmail(email){
     const emailUser = await models.User.findOne({
      where: {email}
     });
     return emailUser
    }

    async update(id,changes){
      const user = await models.User.findByPk(id);
      const updateUser = await user.update(changes);
      return updateUser
    }
     
    async addPhoto(id,name){
      const user = await models.User.findByPk(id);
      const updateUser = await user.update({
        photo: `https://hidden-shelf-36912.herokuapp.com/public/imgUser/${name}`
      });
      return updateUser
    }

    async delete(id){
        const user= await this.findOne(id);
        const deleteUser = await user.destroy(id);
        return user;
    }

}


module.exports = userService
=======
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class userService {
   async create(data) {
    const {
      name, surname, email, number,password,
    } = data;

    const hash = await bcrypt.hash(password, 8);
    const newUser = await models.User.create({

      name,
      surname,
      email,
      number,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const user = await models.User.findAll();
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['rooms_for_user'],
    });
    if (user === null) {
      return user;
    }
    delete user.dataValues.password;
    return user;
  }

  async findEmail(email) {
    const emailUser = await models.User.findOne({
      where: { email },
    });
    return emailUser;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    const updateUser = await user.update(changes);
    return updateUser;
  }

  async addPhoto(id, name) {
    const user = await models.User.findByPk(id);
    const updateUser = await user.update({
      photo: `http://localhost:3000/public/imgUser/${name}`,
    });
    return updateUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const deleteUser = await user.destroy(id);
    return user;
  }
}

module.exports = userService;
>>>>>>> f044811 (commit para front)
