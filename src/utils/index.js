/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable eol-last */
const mapDBToModel = ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    inserted_at,
    updated_at,
}) => ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    insertedAt: inserted_at,
    updatedAt: updated_at,
});

module.exports = { mapDBToModel };