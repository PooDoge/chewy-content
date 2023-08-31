'use strict';

/**
 * chewy-motd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chewy-motd.chewy-motd');
