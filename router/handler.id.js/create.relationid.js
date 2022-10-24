const jwt = require('jsonwebtoken');

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

<<<<<<< HEAD
function roundCategoty (precio){
    let categoria = '';
    if(precio <= 250){
        categoria = 'AB01';
     }else if (precio<= 600){
      categoria = 'AB02';
     }else if(precio > 600) {
      categoria = 'AB03'
     }
     return categoria
}
module.exports = {verifyToken, roundCategoty};
=======
function roundCategoty(precio) {
  let categoria = '';
  if (precio <= 250) {
    categoria = 'AB01';
  } else if (precio <= 600) {
    categoria = 'AB02';
  } else if (precio > 600) {
    categoria = 'AB03';
  }
  return categoria;
}
module.exports = { verifyToken, roundCategoty };
>>>>>>> f044811 (commit para front)
