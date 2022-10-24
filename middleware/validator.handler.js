const boom = require('@hapi/boom');


function validatorHandler(schema,property){
    return (req,res,next)=>{
        const data = req[property];
        const {error} = schema.validate(data,{
            abortEarly: false});
            if(error){
                next(boom.badRequest(error));
            }
        next();
    }
}

<<<<<<< HEAD
module.exports = validatorHandler;
=======
module.exports = validatorHandler;
>>>>>>> f044811 (commit para front)
