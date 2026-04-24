const User = require('../models/UserModel');

exports.createUser = (req, res) => {
  const user = new User("Teste", "teste@email.com");
  res.json(user);
};
