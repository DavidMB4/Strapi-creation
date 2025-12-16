export default {
    routes: [
        {
            method: 'PUT',
            path: '/eventos/:id/interest',
            handler: 'api::evento.evento.incrementInterest',
            config: {
                auth: false,
            },
        },
    ],
};
