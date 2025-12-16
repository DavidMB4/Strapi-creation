/**
 * evento controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::evento.evento', ({ strapi }) => ({
    async incrementInterest(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.entityService.findOne('api::evento.evento', id);

        if (!entity) {
            return ctx.notFound();
        }

        const updatedEntity = await strapi.entityService.update('api::evento.evento', id, {
            data: {
                interestedCount: (entity.interestedCount || 0) + 1,
            },
        });

        return updatedEntity;
    }
}));
