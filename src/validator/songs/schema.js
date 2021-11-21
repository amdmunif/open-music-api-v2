/* eslint-disable eol-last */
/* eslint-disable indent */
const Joi = require('joi');

const SongPayloadSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().required(),
    performer: Joi.string().required(),
    genre: Joi.string().required(),
    duration: Joi.number(),
    body: Joi.string(),
});

module.exports = { SongPayloadSchema };