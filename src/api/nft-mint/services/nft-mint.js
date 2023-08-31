'use strict';

/**
 * nft-mint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nft-mint.nft-mint');
