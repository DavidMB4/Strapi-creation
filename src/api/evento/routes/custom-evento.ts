export default {
    routes: [
        {
            method: 'PUT',
            path: '/eventos/:id/interest',
            handler: 'evento.incrementInterest',
            config: {
                auth: false
            },
        },
    ],
};
