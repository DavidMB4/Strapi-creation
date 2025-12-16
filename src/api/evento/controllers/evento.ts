/**
 * evento controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::evento.evento', ({ strapi }) => ({
    async incrementInterest(ctx) {
        try {
            const { id } = ctx.params;

            if (!id) {
                return ctx.badRequest('ID is required');
            }

            // Fetch the event
            const entity = await strapi.entityService.findOne('api::evento.evento', id, {
                populate: '*',
            });

            if (!entity) {
                return ctx.notFound('Event not found');
            }

            // Get current count, handling both undefined and null
            const currentCount = typeof entity.interestedCount === 'number' ? entity.interestedCount : 0;

            // Update the count
            const updatedEntity = await strapi.entityService.update('api::evento.evento', id, {
                data: {
                    interestedCount: currentCount + 1,
                } as any,
            });

            // Return sanitized response
            return { data: updatedEntity };
        } catch (error) {
            strapi.log.error('Error in incrementInterest:', error);
            return ctx.internalServerError('An error occurred while updating the event');
        }
    }
}));
