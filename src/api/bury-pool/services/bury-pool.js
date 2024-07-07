'use strict';

/**
 * bury-pool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bury-pool.bury-pool');
