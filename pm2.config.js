'use strict';

module.exports = {
  apps : [{
    name   : "diwos-frontend",
	namespace : "diwos-frontend",
    script : "npm",
	args : "run serve",
	autorestart : false,
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
