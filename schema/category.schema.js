const joi = require('joi');

const id = joi.string().min(4).max(7);

const getCategory = joi.object({
<<<<<<< HEAD
    id: id
})

module.exports = {getCategory};
=======
  id,
});

module.exports = { getCategory };
>>>>>>> f044811 (commit para front)
