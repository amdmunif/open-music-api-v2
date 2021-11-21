/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'songs',
    version: '1.0.0',
    register: async(server, { service, validator }) => {
        const songsHandler = new SongsHandler(service, validator);
        server.route(routes(songsHandler));
    },
};