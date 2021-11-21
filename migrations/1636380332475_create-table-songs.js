/* eslint-disable arrow-parens */
/* eslint-disable eol-last */
/* eslint-disable brace-style */
/* eslint-disable block-spacing */
/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('songs', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        title: {
            type: 'TEXT',
            notNull: true,
        },
        year: {
            type: 'INTEGER',
            notNull: true,
        },
        performer: {
            type: 'TEXT',
            notNull: true,
        },
        genre: {
            type: 'TEXT',
            notNull: true,
        },
        duration: {
            type: 'INTEGER',
            notNull: true,
        },
        inserted_at: {
            type: 'TEXT',
            notNull: true,
        },
        updated_at: {
            type: 'TEXT',
            notNull: true,
        },
    });
};

exports.down = pgm => {
    pgm.dropTable('songs');
};