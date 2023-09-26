'use strict';

/**
 * bbdd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bbdd.bbdd');
