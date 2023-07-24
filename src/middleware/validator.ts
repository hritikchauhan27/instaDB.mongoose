import joi from '@hapi/joi';

const schema = joi.object().keys({
      username: joi.string().min(3).max(30).required(),
      email: joi.string().email().lowercase().required(),
      password: joi.string().min(2).required(),
});

export {schema};