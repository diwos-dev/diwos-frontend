'use strict';

module.exports = {
  apps : [{
    name   : "diwos-frontend",
    script : "npm",
	args : "serve",
	autorestart : false,
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
