'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on viacore-p2p Module {0}'
};

module.exports = require('viacore-lib').errors.extend(spec);
